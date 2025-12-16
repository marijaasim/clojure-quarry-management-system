(ns quarry-management.block-test
  (:require [clojure.test :refer :all]
            [quarry-management.block :as block]))

(deftest test-volume-m3
  (testing "Calculating volume from dimensions."
    (is (= 3.6 (block/volume-m3 200 150 120)))
    (is (= 1.0 (block/volume-m3 100 100 100)))))

(deftest test-block-weight
  (testing "Calculating weight from volume and density."
    (is (= 9.9 (block/block-weight 3.6)))
    (is (= 2.75 (block/block-weight 1.0)))))

(deftest test-describe-block
  (testing "Calculating volume and weight from dimensions."
    (is (= {:volume-m3 3.6 :weight-t 9.9}
           (block/describe-block 200 150 120)))
    (is (= {:volume-m3 1.0 :weight-t 2.75}
           (block/describe-block 100 100 100)))))

(deftest test-determine-category
  (is (= 1 (block/determine-category "no cracks and uniform color")))
  (is (= 2 (block/determine-category "visible veins and small cracks")))
  (is (= 3 (block/determine-category "many cracks and bad color"))))

(deftest test-determine-class
  (is (= "A" (block/determine-class 5)))
  (is (= "B" (block/determine-class 30)))
  (is (= "C" (block/determine-class 60))))
