(ns quarry-management.prediction
  (:require
    [quarry-management.db :as db]
    [quarry-management.block :as block]
    [quarry-management.price :as price])
  (:import
    (org.apache.commons.math3.stat.regression OLSMultipleLinearRegression)
    (java.time LocalDate YearMonth DayOfWeek ZoneId)
    (java.util Date)))

(defn ->local-date [d]
  (cond
    (instance? LocalDate d) d
    (instance? java.sql.Date d) (.toLocalDate d)
    (instance? java.sql.Timestamp d) (.toLocalDate (.toLocalDateTime d))
    (instance? Date d)
    (-> d .toInstant (.atZone (ZoneId/systemDefault)) .toLocalDate)
    :else nil))

(defn month-of [^LocalDate d]
  (YearMonth/of (.getYear d) (.getMonthValue d)))

(defn working-day? [^LocalDate d]
  (let [dw (.getDayOfWeek d)]
    (and (not= dw DayOfWeek/SATURDAY)
         (not= dw DayOfWeek/SUNDAY))))

(defn working-days-in-month [^YearMonth ym]
  (->> (range 1 (inc (.lengthOfMonth ym)))
       (map #(.atDay ym %))
       (filter working-day?)
       count))

(def season-index
  {12 0.7, 1 0.7, 2 0.7     ; winter
   3 1.0, 4 1.0, 5 1.0     ; spring
   6 1.1, 7 1.1, 8 1.1     ; summer
   9 1.05, 10 1.05, 11 1.05}) ; autumn

(defn finished-rows []
  (let [raw (db/get-extraction-with-blocks)
        current (month-of (LocalDate/now))]
    (->> raw
         (map #(update % :extraction-date ->local-date))
         (filter :extraction-date)
         (filter #(not= (month-of (:extraction-date %)) current)))))

(defn finished-months []
  (->> (finished-rows)
       (group-by #(month-of (:extraction-date %)))
       (sort-by first)))

(defn monthly-dataset [by-month]
  (map-indexed
    (fn [idx [ym rs]]
      (let [total (reduce + 0.0
                          (map #(double (:extracted-mass-tons %)) rs))
            days  (working-days-in-month ym)
            avg   (/ total days)
            season (season-index (.getMonthValue ym))]
        {:t idx
         :season season
         :avg avg}))
    by-month))

(defn train-regression [data]
  (let [xs (map (fn [{:keys [t season]}]
                  [t season])
                data)
        ys (map :avg data)
        reg (OLSMultipleLinearRegression.)]
    (.newSampleData reg
                    (double-array ys)
                    (into-array (map double-array xs)))
    reg))

(defn next-unstarted-month []
  (.plusMonths (month-of (LocalDate/now)) 1))

(defn winter-floor [by-month]
  (let [winter-months
        (filter
          (fn [[ym _]]
            (contains? #{12 1 2} (.getMonthValue ym)))
          by-month)
        avgs
        (for [[ym rs] winter-months]
          (let [total (reduce + 0.0
                              (map #(double (:extracted-mass-tons %)) rs))
                days (working-days-in-month ym)]
            (/ total days)))]
    (when (seq avgs)
      (* 0.9 (apply min avgs)))))

(defn predict []
  (let [by-month (finished-months)]
    (if (< (count by-month) 3)
      {:year (.getYear (LocalDate/now))
       :month (.getMonthValue (LocalDate/now))
       :total-mass 0.0}
      (let [data   (monthly-dataset by-month)
            model  (train-regression data)
            target (next-unstarted-month)
            t       (count data)
            season  (season-index (.getMonthValue target))
            days    (working-days-in-month target)
            beta (.estimateRegressionParameters model)
            avg-pred (+ (nth beta 0)
                        (* (nth beta 1) t)
                        (* (nth beta 2) season))
            floor (winter-floor by-month)
            avg-final (if floor
                        (max avg-pred floor)
                        avg-pred)
            total (* avg-final days)]

        {:year (.getYear target)
         :month (.getMonthValue target)
         :total-mass (max 0.0 total)}))))

(defn finished-year-months []
  (->> (finished-months)
       (map first)))

(defn block-distributions []
  (let [months (finished-year-months)]
    (->> months
         (map
           (fn [ym]
             (let [m (block/monthly-mass-by-class-category ym)
                   total (reduce + (vals m))]
               (when (pos? total)
                 (into {}
                       (map (fn [[k v]] [k (/ v total)]) m))))))
         (filter identity))))

(defn global-block-distribution []
  (let [months (finished-year-months)
        monthly (map block/monthly-mass-by-class-category months)
        total-by-key
        (apply merge-with + monthly)
        grand-total
        (reduce + (vals total-by-key))]
    (when (pos? grand-total)
      (into {}
            (map (fn [[k v]]
                   [k (/ v grand-total)])
                 total-by-key)))))

(defn predict-blocks []
  (let [{:keys [total-mass]} (predict)
        dist (global-block-distribution)
        blocks
        (->> dist
             (map (fn [[k share]]
                    (let [cls (.toUpperCase (subs (name k) 0 1))
                          cat (Integer/parseInt (subs (name k) 1))
                          mass (* total-mass share)
                          price (get price/price-per-ton [cls cat] 0)
                          revenue (* mass price)]
                      {:class cls
                       :category cat
                       :total-mass mass
                       :revenue revenue})))
             vec)
        total-revenue (reduce + (map :revenue blocks))]

    {:blocks blocks
     :total-revenue total-revenue}))