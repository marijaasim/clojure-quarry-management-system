(ns quarry-management.price
  (:require [quarry-management.db :as db])
  (:import [java.time LocalDate]))

(def price-per-ton
  {["A" 1] 200
   ["A" 2] 190
   ["A" 3] 180
   ["B" 1] 160
   ["B" 2] 150
   ["B" 3] 140
   ["C" 1] 120
   ["C" 2] 110
   ["C" 3] 100})

(defn block-price
  "Returns the estimated price of a block based on its class and category, multiplied by weight."
  [block]
  (let [key [(:class block) (:category block)]
        price-per-t (get price-per-ton key 0)]
    (* price-per-t (:weight-t block))))

(defn block-price-total
  "Returns the total estimated value of all blocks."
  [blocks]
  (reduce (fn [acc block]
            (+ acc (block-price block)))
          0
          blocks))

(defn revenue-on-day [^LocalDate date]
  (let [blocks (db/get-extraction-with-blocks)]
    (->> blocks
         (filter #(= (.toLocalDate (:extraction-date %)) date))
         (map block-price)
         (reduce + 0))))

(defn dates-between [from to]
  (take-while (fn [d] (not (.isAfter d to)))
              (iterate #(.plusDays % 1) from)))

(defn revenue-from-to [from to]
  (->> (dates-between from to)
       (map revenue-on-day)
       (reduce +)))