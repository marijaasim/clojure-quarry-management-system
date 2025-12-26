(ns quarry-management.inventory)

(defn count-blocks-by-category
  "Returns a map with counts of blocks per category."
  [blocks]
  (reduce (fn [acc block]
            (let [cat (:category block)]
              (update acc cat (fnil inc 0))))
          {}
          blocks))

(defn filter-and-summarize
  "Filters blocks by class and category, prints info and returns the list."
  [blocks class category]
  (let [filtered (filter #(and (= (:class %) class)
                               (= (:category %) category))
                         blocks)
        count-blocks (count filtered)]
    (println "There are" count-blocks "blocks of class" class "and category" category)
    filtered))