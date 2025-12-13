(ns quarry-management.extraction
  (:require [quarry-management.inventory :as inv]))

(def extraction-history (atom []))

(defn log-extraction [m3-extracted blocks-extracted]
  (swap! extraction-history conj {:m3 m3-extracted
                                  :blocks blocks-extracted})
  (doseq [b blocks-extracted]
    (inv/add-block b)))
