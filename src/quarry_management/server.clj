(ns quarry-management.server
  (:require
    [ring.adapter.jetty :as jetty]
    [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
    [ring.middleware.file :refer [wrap-file]]
    [compojure.core :refer [routes GET POST]]
    [quarry-management.api :as api]))

(def app
  (-> (routes
        (GET "/prices" [] api/get-prices)
        (POST "/calculate-price" req (api/calculate-price req))
        (POST "/revenue-from-to" req (api/calculate-revenue-from-to req))
        (GET "/api/blocks" req (api/get-extraction-with-blocks req))
        (POST "/api/blocks/update" req (api/update-block req))
        (POST "/api/blocks/delete" req (api/delete-block req)))
      (wrap-json-body {:keywords? true})
      wrap-json-response
      (ring.middleware.file/wrap-file "public")))

(defn -main []
  (jetty/run-jetty app {:port 3000 :join? false}))
