(ns quarry-management.frontend.price
  (:require [reagent.core :as r]
            [quarry-management.frontend.api :as api]))

(def selected-class (r/atom ""))
(def selected-category (r/atom ""))
(def mass (r/atom ""))
(def calculated-price (r/atom nil))
(def date-from (r/atom ""))
(def date-to (r/atom ""))
(def revenue (r/atom nil))

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
        {:reagent-render
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
                      "Price: " @calculated-price])]
              [:div {:style {:margin-top "30px"}}
               [:label "Date from: "]
               [:input {:type "date"
                        :value @date-from
                        :on-change #(reset! date-from (.. % -target -value))}]

               [:label {:style {:margin-left "10px"}} "Date to: "]
               [:input {:type "date"
                        :value @date-to
                        :on-change #(reset! date-to (.. % -target -value))}]

               [:button
                {:style {:margin-left "10px"}
                 :on-click
                 (fn []
                     (api/calculate-revenue-from-to
                       @date-from
                       @date-to
                       (fn [result]
                           (reset! revenue (:revenue result)))))}
                "Calculate Total Revenue"]

               (when @revenue
                     [:div {:style {:margin-top "10px"
                                    :font-weight "bold"}}
                      "Revenue: " @revenue])]])}))