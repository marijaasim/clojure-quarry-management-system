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

