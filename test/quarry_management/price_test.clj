(ns quarry-management.price-test
  (:require [clojure.test :refer :all]
            [quarry-management.price :as pricing]
            [quarry-management.block :as block]))

(deftest test-block-price
  (is (= (pricing/block-price {:class "A" :category 1 :weight-t 10})
         (* 10 (get pricing/price-per-ton ["A" 1]))))
  (is (= (pricing/block-price {:class "B" :category 2 :weight-t 5})
         (* 5 (get pricing/price-per-ton ["B" 2])))))

(deftest test-block-price-unknown
  (is (= 0
         (pricing/block-price {:class "Z" :category 9 :weight-t 10}))))

(deftest test-block-price-total
  (is (= (pricing/block-price-total block/blocks)
         (reduce (fn [acc block]
                   (+ acc (pricing/block-price block)))
                 0
                 block/blocks))))

(deftest test-block-price-total-empty
  (is (= 0 (pricing/block-price-total []))))

(deftest test-dates-between
  (let [from (java.time.LocalDate/of 2026 1 1)
        to   (java.time.LocalDate/of 2026 1 3)]
    (is (= (pricing/dates-between from to)
           [(java.time.LocalDate/of 2026 1 1)
            (java.time.LocalDate/of 2026 1 2)
            (java.time.LocalDate/of 2026 1 3)]))))

(deftest test-dates-between-single-day
  (let [d (java.time.LocalDate/of 2026 1 1)]
    (is (= (pricing/dates-between d d) [d]))))