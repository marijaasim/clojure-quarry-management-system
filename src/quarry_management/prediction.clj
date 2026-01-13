(ns quarry-management.prediction)

(def working-days-per-month
  {1 20
   2 18
   3 21
   4 20
   5 20
   6 21
   7 23
   8 21
   9 22
   10 23
   11 19
   12 23})

(def season-coefficient
  {:winter 0.7
   :spring 1.1
   :summer 1.0
   :autumn 1.15})

(defn month->season [month]
  (cond
    (#{12 1 2} month) :winter
    (#{3 4 5} month) :spring
    (#{6 7 8} month) :summer
    (#{9 10 11} month) :autumn))

(defn parse-month [yyyy-mm]
  (Integer/parseInt (subs yyyy-mm 5 7)))

(defn month-features [yyyy-mm]
  (let [month (parse-month yyyy-mm)
        season (month->season month)]
    {:month yyyy-mm
     :working-days (working-days-per-month month)
     :season season
     :season-coef (season-coefficient season)}))

(def base-daily-production 100)

(defn estimate-production [yyyy-mm]
  (let [{:keys [working-days season-coef]} (month-features yyyy-mm)]
    (* working-days season-coef base-daily-production)))

