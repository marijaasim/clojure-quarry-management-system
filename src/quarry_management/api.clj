(ns quarry-management.api
  (:require
    [quarry-management.pricing :as pricing]
    [ring.util.response :as resp]
    [quarry-management.db :as db])
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
