(ns quarry-management.frontend.api)

(def api-url "http://localhost:3000")

(defn parse-json [text]
      (-> text js/JSON.parse (js->clj :keywordize-keys true)))

(defn fetch-json [url opts]
      (-> (js/fetch url (clj->js opts))
          (.then #(if (.-ok %) (-> % .text (.then parse-json))
                               (throw (js/Error. (str "HTTP " (.-status %))))))))

(defn get-blocks [callback]
      (-> (fetch-json (str api-url "/api/blocks") {:method "GET"})
          (.then callback)
          (.catch #(js/console.error "Error fetching blocks:" %))))

(defn get-block-details [id callback]
      (-> (fetch-json (str api-url "/api/blocks/" id "/details")
                      {:method "GET"})
          (.then callback)
          (.catch #(js/console.error "Error fetching block details:" %))))

(defn create-block [block-data callback]
      (-> (fetch-json (str api-url "/blocks")
                      {:method "POST"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify (clj->js block-data))})
          (.then callback)
          (.catch #(js/console.error "Error creating block:" %))))

(defn update-block [data callback]
      (-> (fetch-json (str api-url "/api/blocks/update")
                      {:method "POST"
                       :headers #js {"Content-Type" "application/json"}
                       :body (js/JSON.stringify (clj->js data))})
          (.then callback)
          (.catch #(js/console.error "Update block error:" %))))

(defn delete-block [id on-success]
      (-> (js/fetch
            (str api-url "/api/blocks/delete")
            #js {:method "POST"
                 :headers #js {"Content-Type" "application/json"}
                 :body (.stringify js/JSON #js {:id id})})
          (.then (fn [res]
                     (when (.-ok res)
                           (on-success))))
          (.catch (fn [err]
                      (js/console.error "Delete error:" err)))))

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

(defn describe-block [data callback]
      (-> (js/fetch
            (str api-url "/api/blocks/describe")
            #js {:method "POST"
                 :headers #js {"Content-Type" "application/json"}
                 :body (.stringify js/JSON (clj->js data))})
          (.then #(.json %))
          (.then #(callback (js->clj % :keywordize-keys true)))
          (.catch #(js/console.error "Describe block error:" %))))

(defn create-daily-extraction [data callback]
      (-> (fetch-json
            (str api-url "/api/daily-extraction/create")
            {:method "POST"
             :headers #js {"Content-Type" "application/json"}
             :body (js/JSON.stringify (clj->js data))})
          (.then callback)
          (.catch #(js/console.error "Create daily extraction error:" %))))