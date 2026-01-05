(ns quarry-management.db
  (:require [next.jdbc :as jdbc]
            [clojure.string :as str]
            [quarry-management.db :as db])
  (:import [java.time LocalDate]))

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

(defn get-extraction-with-blocks []
  (map change_to-
       (jdbc/execute! ds
                      ["SELECT b.*, d.extraction_date
           FROM block b
           JOIN daily_extraction d
             ON b.daily_extraction_id = d.id"])))
