(ns quarry-management.frontend.api)

(def api-url "http://localhost:3000")

(defn parse-json [text]
      (-> text js/JSON.parse (js->clj :keywordize-keys true)))

(defn fetch-json [url opts]
      (-> (js/fetch url (clj->js opts))
          (.then #(if (.-ok %) (-> % .text (.then parse-json))
                               (throw (js/Error. (str "HTTP " (.-status %))))))))

(defn get-blocks [callback]
      (-> (fetch-json (str api-url "/blocks") {:method "GET"})
          (.then callback)
          (.catch #(js/console.error "Error fetching blocks:" %))))

(defn create-block [block-data callback]
      (-> (fetch-json (str api-url "/blocks")
                      {:method "POST"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify (clj->js block-data))})
          (.then callback)
          (.catch #(js/console.error "Error creating block:" %))))

(defn update-block [id block-data callback]
      (-> (fetch-json (str api-url "/blocks/" id)
                      {:method "PUT"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify (clj->js block-data))})
          (.then callback)
          (.catch #(js/console.error "Error updating block:" %))))

(defn get-prices [callback]
      (-> (fetch-json (str api-url "/prices") {:method "GET"})
          (.then callback)
          (.catch #(js/console.error "Error fetching prices:" %))))

(defn calculate-price [class category weight callback]
      (-> (fetch-json (str api-url "/calculate-price")
                      {:method "POST"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify (clj->js {:class class :category category :weight weight}))})
          (.then callback)
          (.catch #(js/console.error "Error calculating price:" %))))

(defn calculate-revenue-from-to [from to callback]
      (-> (fetch-json (str api-url "/revenue-from-to")
                      {:method "POST"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify
                               #js {:from from
                                    :to   to})})
          (.then callback)
          (.catch #(js/console.error "Error calculating revenue:" %))))


