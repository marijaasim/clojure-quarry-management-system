(ns quarry-management.api
  (:require
    [quarry-management.pricing :as pricing]
    [ring.util.response :as resp]))

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