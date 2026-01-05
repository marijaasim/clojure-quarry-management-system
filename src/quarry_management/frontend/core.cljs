(ns quarry-management.frontend.core
  (:require
    [reagent.core :as r]
    [reagent.dom.client :as rdom]
    [quarry-management.frontend.price :as price]
    [quarry-management.frontend.inventory :as inventory]))

(def current-page (r/atom :price))

(defn menu []
      [:div {:style {:width "200px"
                     :padding "20px"
                     :border-right "1px solid #ccc"
                     :float "left"
                     :height "100vh"
                     :box-sizing "border-box"}}

       [:button
        {:style {:display "block"
                 :width "100%"
                 :margin "10px 0"
                 :padding "10px"}
         :on-click #(js/alert "Daily Extraction clicked")}
        "Daily Extraction"]

       [:button
        {:style {:display "block"
                 :width "100%"
                 :margin "10px 0"
                 :padding "10px"}
         :on-click #(reset! current-page :inventory)}
        "Inventory"]

       [:button
        {:style {:display "block"
                 :width "100%"
                 :margin "10px 0"
                 :padding "10px"}
         :on-click #(reset! current-page :price)}
        "Price"]])

(defn content []
      [:div {:style {:margin-left "220px"
                     :padding "20px"
                     :box-sizing "border-box"}}
       (case @current-page
             :price     [price/page]
             :inventory [inventory/page]
             [:div "Select a menu item"])])

(defn app []
      [:div
       [menu]
       [content]])

(defonce root (atom nil))

(defn ^:export init []
      (js/console.log "INIT CALLED")

      (when-not @root
                (let [el (.getElementById js/document "app")]
                     (js/console.log "APP ELEMENT:" el)
                     (reset! root (rdom/create-root el))))

      (rdom/render @root [app]))



