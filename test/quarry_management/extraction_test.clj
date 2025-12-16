(ns quarry-management.extraction-test
  (:require [clojure.test :refer :all]
            [quarry-management.extraction :as ext]
            [quarry-management.inventory :as inv]))

(deftest test-log-extraction
  (testing "Logging extraction updates inventory and history"
    (reset! inv/inventory [])
    (reset! ext/extraction-history [])

    (let [block {:id 100 :class "A" :category 1 :weight-t 10}
          m3 3.6]

      (ext/log-extraction m3 [block])

      (is (= 1 (count (inv/list-blocks))))
      (is (= (:id (first (inv/list-blocks))) 100))

      (is (= 1 (count @ext/extraction-history)))
      (is (= (:m3 (first @ext/extraction-history)) m3))
      (is (= (:blocks (first @ext/extraction-history)) [block])))))
