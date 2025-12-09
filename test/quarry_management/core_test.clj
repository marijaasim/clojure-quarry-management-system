(ns quarry-management.core-test
  (:require [clojure.test :refer :all]
            [quarry-management.core :as core]))

(deftest test-volume-m3
  (testing "Calculating volume from dimensions."
    (is (= 3.6 (core/volume-m3 200 150 120)))
    (is (= 1.0 (core/volume-m3 100 100 100)))))

(deftest test-block-weight
  (testing "Calculating weight from volume and density."
    (is (= 9.9 (core/block-weight 3.6)))
    (is (= 2.75 (core/block-weight 1.0)))))

(deftest test-describe-block
  (testing "Calculating volume and weight from dimensions."
    (is (= {:volume-m3 3.6 :weight-t 9.9}
           (core/describe-block 200 150 120)))
    (is (= {:volume-m3 1.0 :weight-t 2.75}
           (core/describe-block 100 100 100)))))

(deftest test-count-blocks-by-category
  (let [blocks core/blocks
        counts (core/count-blocks-by-category blocks)]
    (is (= 4 (get counts 1)))
    (is (= 4 (get counts 2)))
    (is (= 2 (get counts 3)))))

(deftest test-determine-category
  (is (= 1 (core/determine-category "no cracks and uniform color")))
  (is (= 2 (core/determine-category "visible veins and small cracks")))
  (is (= 3 (core/determine-category "many cracks and bad color"))))

(deftest test-determine-class
  (is (= "A" (core/determine-class 5)))
  (is (= "B" (core/determine-class 30)))
  (is (= "C" (core/determine-class 60))))

(deftest test-filter-and-summarize
  (let [result (core/filter-and-summarize core/blocks "A" 1)]
    (is (= (count result) 4))
    (is (= (map :id result) [0 2 5 8]))))

(deftest test-block-price
  (is (= (core/block-price {:class "A" :category 1 :weight-t 10})
         (* 10 (get core/price-per-ton ["A" 1]))))
  (is (= (core/block-price {:class "B" :category 2 :weight-t 5})
         (* 5 (get core/price-per-ton ["B" 2])))))

(deftest test-block-price-total
  (is (= (core/block-price-total core/blocks)
         (reduce (fn [acc block]
                   (+ acc (core/block-price block)))
                 0
                 core/blocks))))