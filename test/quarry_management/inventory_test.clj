(ns quarry-management.inventory-test
  (:require [clojure.test :refer :all]
            [quarry-management.inventory :as inv]
            [quarry-management.block :as block]))

(deftest test-count-blocks-by-category
  (let [blocks block/blocks
        counts (inv/count-blocks-by-category blocks)]
    (is (= 4 (get counts 1)))
    (is (= 4 (get counts 2)))
    (is (= 2 (get counts 3)))))

(deftest test-filter-and-summarize
  (let [result (inv/filter-and-summarize block/blocks "A" 1)]
    (is (= (count result) 4))
    (is (= (map :id result) [0 2 5 8]))))