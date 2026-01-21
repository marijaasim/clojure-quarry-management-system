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
  (is (= 1 (block/determine-category 300)))
  (is (= 2 (block/determine-category 230)))
  (is (= 3 (block/determine-category 200))))

(deftest test-determine-category-boundaries
  (testing "Category boundaries"
    (is (= 1 (block/determine-category 251)))
    (is (= 2 (block/determine-category 250)))
    (is (= 2 (block/determine-category 220)))
    (is (= 3 (block/determine-category 219)))))

(deftest test-determine-class
  (is (= "A" (block/determine-class "no cracks and uniform color")))
  (is (= "B" (block/determine-class "visible veins and small cracks")))
  (is (= "C" (block/determine-class "many cracks and bad color"))))

(deftest test-date->year-month-sql-date
  (let [d (java.sql.Date/valueOf "2026-01-15")]
    (is (= (java.time.YearMonth/of 2026 1)
           (block/date->year-month d)))))

(deftest test-date->year-month-util-date
  (let [d (java.util.Date. 1262304000000)]
    (is (= (java.time.YearMonth/of 2010 1)
           (block/date->year-month d)))))