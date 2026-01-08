(ns quarry-management.api
  (:require
    [quarry-management.pricing :as pricing]
    [ring.util.response :as resp]
    [quarry-management.db :as db]
    [quarry-management.block :as b])
  (:import
    [java.time LocalDate]))

(defn get-prices [_request]
  (resp/response
    {:price-per-ton pricing/price-per-ton}))

(defn calculate-price [request]
  (let [{:keys [class category weight]} (:body request)
        price (pricing/block-price
                {:class class
                 :category category
                 :weight-t weight})]
    (resp/response {:price price})))

(defn calculate-revenue-from-to [request]
  (let [{:keys [from to]} (:body request)
        from-date (LocalDate/parse from)
        to-date   (LocalDate/parse to)
        revenue   (pricing/revenue-from-to from-date to-date)]
    (resp/response {:revenue revenue})))

(defn get-all-blocks []
  {:status 200
   :body (db/get-all-blocks)})

(defn get-extraction-with-blocks [_]
  (resp/response
    (db/get-extraction-with-blocks)))

(defn update-block [req]
  (let [{:keys [id length-cm width-cm height-cm
                characteristics waste-percentage]} (:body req)]
    (when-not (and length-cm width-cm height-cm)
      (throw (ex-info "Missing dimensions"
                      {:length length-cm
                       :width width-cm
                       :height height-cm})))
    (let [desc (b/describe-block length-cm width-cm height-cm)
          category (b/determine-category characteristics)
          class (b/determine-class waste-percentage)]
      (db/update-block!
        {:id id
         :length-cm length-cm
         :width-cm width-cm
         :height-cm height-cm
         :volume-m3 (:volume-m3 desc)
         :weight-t (:weight-t desc)
         :category category
         :class class})
      {:status 200
       :body {}})))

(defn delete-block [req]
  (let [{:keys [id]} (:body req)]
    (db/delete-block! id)
    {:status 200
     :body {:ok true}}))

(defn describe-block [req]
  (let [{:keys [length-cm width-cm height-cm]} (:body req)
        desc (b/describe-block length-cm width-cm height-cm)]
    {:status 200
     :body desc}))

(defn create-daily-extraction [req]
  (try
    (let [{:keys [date total-mass blocks]} (:body req)
          extraction-date (java.time.LocalDate/parse date)
          res (db/insert-daily-extraction! extraction-date total-mass)
          daily-id (:daily_extraction/id res)]
      (doseq [blk blocks]
        (let [{:keys [volume-m3 weight-t]}
              (b/describe-block
                (:length-cm blk)
                (:width-cm blk)
                (:height-cm blk))]
          (db/insert-block!
            daily-id
            (assoc blk
              :volume-m3 volume-m3
              :weight-t weight-t))))
      {:status 200
       :body {:ok true
              :daily-extraction-id daily-id}})
    (catch Exception e
      {:status 500
       :body {:error (.getMessage e)}})))