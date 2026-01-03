(ns quarry-management.pricing)

(def price-per-ton
  {["A" 1] 100
   ["A" 2] 90
   ["A" 3] 80
   ["B" 1] 85
   ["B" 2] 70
   ["B" 3] 60
   ["C" 1] 70
   ["C" 2] 55
   ["C" 3] 40})

(defn get-prices []
  {:price-per-ton price-per-ton})

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