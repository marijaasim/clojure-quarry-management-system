(ns quarry-management.core
  (:require [clojure.string :as str]))

(def blocks
  [{:id 101 :length-cm 200 :width-cm 150 :height-cm 120 :volume-m3 3.6 :weight-t 9.9 :class "A" :category 1}
   {:id 102 :length-cm 210 :width-cm 160 :height-cm 130 :volume-m3 4.37 :weight-t 12.0 :class "B" :category 2}
   {:id 103 :length-cm 190 :width-cm 140 :height-cm 120 :volume-m3 3.19 :weight-t 8.8 :class "A" :category 1}
   {:id 104 :length-cm 180 :width-cm 150 :height-cm 110 :volume-m3 2.97 :weight-t 8.2 :class "C" :category 3}
   {:id 105 :length-cm 220 :width-cm 170 :height-cm 140 :volume-m3 5.26 :weight-t 14.5 :class "B" :category 2}
   {:id 106 :length-cm 200 :width-cm 150 :height-cm 120 :volume-m3 3.6 :weight-t 9.9 :class "A" :category 1}
   {:id 107 :length-cm 210 :width-cm 160 :height-cm 130 :volume-m3 4.37 :weight-t 12.0 :class "B" :category 2}
   {:id 108 :length-cm 195 :width-cm 145 :height-cm 125 :volume-m3 3.53 :weight-t 9.7 :class "C" :category 3}
   {:id 109 :length-cm 205 :width-cm 155 :height-cm 125 :volume-m3 3.97 :weight-t 10.9 :class "A" :category 1}
   {:id 110 :length-cm 215 :width-cm 165 :height-cm 135 :volume-m3 4.79 :weight-t 13.2 :class "B" :category 2}])

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

(defn count-blocks-by-category
  "Returns a map with counts of blocks per category."
  [blocks]
  (reduce (fn [acc block]
            (let [cat (:category block)]
              (update acc cat (fnil inc 0))))
          {}
          blocks))

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
  (cond
    (<= waste-percentage 19)
    "A"   ;; minimal waste

    (and (>= waste-percentage 20) (<= waste-percentage 40))
    "B"   ;; moderate waste

    (>= waste-percentage 41)
    "C"   ;; high waste

    :else
    "Unknown"))
