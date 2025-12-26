(ns quarry-management.block
  (:require [clojure.string :as str]
            [quarry-management.db :as db]))

(def blocks
  (db/get-all-blocks))

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
  "Assigns a quality category (1, 2, or 3) based on the description text."
  [description]
  (let [d (str/lower-case description)]
    (cond
      (re-find #"no cracks|minimal cracks|uniform color" d) 1
      (re-find #"visible veins|small cracks|not perfect" d) 2
      (re-find #"many cracks|bad color|deformations" d) 3
      :else :unknown)))

(defn determine-class
  "Assigns a usability class (A, B, or C) based on waste percentage."
  [waste-percentage]
  (cond                         ;; ne moze case jer radi samo sa konstantama, a ja ovde imam intervale
    (<= waste-percentage 19)
    "A"   ;; minimal waste

    (and (>= waste-percentage 20) (<= waste-percentage 40))
    "B"   ;; moderate waste

    (>= waste-percentage 41)
    "C"   ;; high waste

    :else
    "Unknown"))
