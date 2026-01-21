(ns quarry-management.block
  (:require [clojure.string :as str]
            [quarry-management.db :as db])
  (:import [java.time LocalDate YearMonth ZoneId]))

;; class (A, B i C):
;; "no cracks|minimal cracks|uniform color" A
;; "visible veins|small cracks|not perfect" B
;; "many cracks|bad color|deformations" C

;; category:
;; 1 - block length from 250cm
;; 2 - block length from 220cm to 250cm
;; 3 - block length below 220cm

(defn volume-m3
  "Calculates volume in m³ from dimensions in cm."
  [length-cm width-cm height-cm]
  (/ (* length-cm width-cm height-cm) 1000000.0))

(defn block-weight
  "Calculates weight in tons (density is 2.75 t/m³)."
  [volume-m3]
  (* volume-m3 2.75))

(defn describe-block
  "Calculates volume and weight from dimensions."
  [length-cm width-cm height-cm]
  (let [v (volume-m3 length-cm width-cm height-cm)
        w (block-weight v)]
    {:volume-m3 v
     :weight-t  w}))

(defn determine-category
  [length-cm]
  (cond
    (> length-cm 250) 1
    (and (>= length-cm 220) (<= length-cm 250)) 2
    (< length-cm 220) 3
    :else :unknown))

(defn determine-class
  [description]
  (let [d (str/lower-case description)]
    (cond
      (re-find #"no cracks|minimal cracks|uniform color" d) "A"
      (re-find #"visible veins|small cracks|not perfect" d) "B"
      (re-find #"many cracks|bad color|deformations" d) "C"
      :else "Unknown")))

(defn date->year-month
  [d]
  (cond
    (nil? d)
    nil
    (instance? java.sql.Date d)
    (-> d
        .toLocalDate
        (YearMonth/from))
    (instance? java.util.Date d)
    (-> d
        .toInstant
        (.atZone (ZoneId/systemDefault))
        .toLocalDate
        (YearMonth/from))
    :else
    (do
      (println "UNKNOWN DATE TYPE:" (class d))
      nil)))

(defn monthly-mass-by-class-category
  [^YearMonth ym]
  (->> (db/get-extraction-with-blocks)
       (filter #(= (date->year-month (:extraction-date %)) ym))
       (group-by
         (fn [b]
           (keyword
             (str
               (str/lower-case (str (:class b)))
               (:category b)))))
       (reduce-kv
         (fn [acc k blocks]
           (assoc acc k
                      (double
                        (reduce + 0
                                (map :weight-t blocks)))))
         {})))