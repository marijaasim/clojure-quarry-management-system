(ns quarry-management.frontend.price
  (:require [reagent.core :as r]
            [quarry-management.frontend.api :as api]))

(def prices (r/atom {}))
(def selected-class (r/atom ""))
(def selected-category (r/atom ""))
(def mass (r/atom ""))
(def calculated-price (r/atom nil))
(def blocks (r/atom []))

(defn load-data []
      (api/get-prices #(reset! prices %))
      (api/get-blocks #(reset! blocks %)))

(def price-per-ton
  {"A" {1 100 2 90 3 80}
   "B" {1 85  2 70 3 60}
   "C" {1 70  2 55 3 40}})

(def cell-style
  {:border "1px solid black"
   :padding "8px"
   :text-align "center"})

(def header-style
  (assoc cell-style :background "#f2f2f2" :font-weight "bold"))

(defn price-table []
      [:table {:style {:border-collapse "collapse"
                       :margin "20px 0"
                       :width "400px"}}

       [:thead
        [:tr
         [:th {:style header-style} "Class"]
         [:th {:style header-style} "1"]
         [:th {:style header-style} "2"]
         [:th {:style header-style} "3"]]]

       [:tbody
        (for [cls ["A" "B" "C"]]
             ^{:key cls}
             [:tr
              [:td {:style cell-style} cls]
              [:td {:style cell-style} (get-in price-per-ton [cls 1])]
              [:td {:style cell-style} (get-in price-per-ton [cls 2])]
              [:td {:style cell-style} (get-in price-per-ton [cls 3])]])]])


(defn page []
      (r/create-class
        {:component-did-mount load-data
         :reagent-render
         (fn []
             [:div
              [:h2 "Price"]

              [price-table]

              [:div {:style {:margin-top "20px"}}
               [:label "Class: "]
               [:select {:value @selected-class
                         :on-change #(reset! selected-class (.. % -target -value))}
                [:option {:value ""} "Select..."]
                [:option "A"] [:option "B"] [:option "C"]]

               [:label {:style {:margin-left "10px"}} "Category: "]
               [:select {:value @selected-category
                         :on-change #(reset! selected-category (.. % -target -value))}
                [:option {:value ""} "Select..."]
                [:option "1"] [:option "2"] [:option "3"]]

               [:label {:style {:margin-left "10px"}} "Mass: "]
               [:input {:type "number"
                        :value @mass
                        :on-change #(reset! mass (.. % -target -value))}]

               [:button
                {:style {:margin-left "10px"}
                 :on-click
                 (fn []
                     (api/calculate-price
                       @selected-class
                       (js/parseInt @selected-category)
                       (js/parseFloat @mass)
                       (fn [result]
                           (reset! calculated-price (:price result)))))}
                "Calculate Price"]

               (when @calculated-price
                     [:div {:style {:margin-top "10px"
                                    :font-weight "bold"}}
                      "Price: " @calculated-price])]])}))


