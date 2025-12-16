(ns quarry-management.inventory-test
  (:require [clojure.test :refer :all]
            [quarry-management.inventory :as inv]
            [quarry-management.block :as block]))

(deftest test-add-block
  (reset! inv/inventory block/blocks)
  (let [new-block {:id 100 :class "A" :category 1 :weight-t 10}]
    (inv/add-block new-block)
    (is (= (count (inv/list-blocks)) (inc (count block/blocks))))
    (is (= (:id (last (inv/list-blocks))) 100))))

(deftest test-remove-block
  (reset! inv/inventory block/blocks)
  (inv/remove-block 0)
  (is (= (count (inv/list-blocks)) (dec (count block/blocks))))
  (is (not-any? #(= (:id %) 0) (inv/list-blocks))))

(deftest test-list-blocks
  (reset! inv/inventory block/blocks)
  (let [lst (inv/list-blocks)]
    (is (= lst block/blocks))
    (is (= (count lst) 10))))

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