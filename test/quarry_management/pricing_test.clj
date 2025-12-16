(ns quarry-management.pricing-test
  (:require [clojure.test :refer :all]
            [quarry-management.pricing :as pricing]
            [quarry-management.block :as block]))

(deftest test-block-price
  (is (= (pricing/block-price {:class "A" :category 1 :weight-t 10})
         (* 10 (get pricing/price-per-ton ["A" 1]))))
  (is (= (pricing/block-price {:class "B" :category 2 :weight-t 5})
         (* 5 (get pricing/price-per-ton ["B" 2])))))

(deftest test-block-price-total
  (is (= (pricing/block-price-total block/blocks)
         (reduce (fn [acc block]
                   (+ acc (pricing/block-price block)))
                 0
                 block/blocks))))
