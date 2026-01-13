(ns quarry-management.block
  (:require [clojure.string :as str]
            [quarry-management.db :as db]))

(def blocks
  (db/get-all-blocks))

;; klasa (A, B i C):
;; "no cracks|minimal cracks|uniform color" A
;; "visible veins|small cracks|not perfect" B
;; "many cracks|bad color|deformations" C

;; kategorija:
;; 1 - duzina bloka od 250cm
;; 2 - duzina bloka od 220cm do 250cm
;; 3 - duzina bloka ispod 220cm

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
    (and (>= length-cm 220) (< length-cm 250)) 2
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