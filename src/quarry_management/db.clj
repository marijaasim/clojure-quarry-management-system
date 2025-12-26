(ns quarry-management.db
  (:require [next.jdbc :as jdbc]
            [clojure.string :as str]))

(def db-spec
  {:dbtype "postgresql"
   :dbname "querry"
   :host "localhost"
   :port 5432
   :user "marijasimovic"})

(def ds (jdbc/get-datasource db-spec))

(defn change_to- [m]
  (into {}
        (for [[k v] m]
          [(-> k name (str/replace "_" "-") keyword) v])))

(defn get-all-blocks []
  (map change_to-
       (jdbc/execute! ds ["SELECT * FROM block"])))
