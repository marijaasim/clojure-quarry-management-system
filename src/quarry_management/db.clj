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

(defn update-block! [{:keys [id length-cm width-cm height-cm volume-m3 weight-t category class]}]
  (jdbc/execute! ds
                 ["UPDATE block
      SET length_cm = ?, width_cm = ?, height_cm = ?,
          volume_m3 = ?, weight_t = ?, category = ?, class = ?
      WHERE id = ?"
                  length-cm width-cm height-cm volume-m3 weight-t category class id]))

(defn get-block-by-id [id]
  (first
    (jdbc/execute! ds
      ["SELECT * FROM block WHERE id = ?" id])))

(defn delete-block! [id]
  (jdbc/execute! ds
    ["DELETE FROM block WHERE id = ?" id]))