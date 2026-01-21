(ns quarry-management.frontend.prediction
  (:require [reagent.core :as r]
            [quarry-management.frontend.api :as api]))

(def result (r/atom nil))
(def block-result (r/atom nil))
(def loading? (r/atom false))

(defn prediction-table [{:keys [blocks total-revenue]}]
      [:<>
       [:table {:style {:margin-top "10px"
                        :border-collapse "collapse"
                        :border "1px solid black"}}
        [:thead
         [:tr
          (for [h ["Class" "Category" "Total mass (t)" "Revenue (EUR)"]]
               ^{:key h}
               [:th {:style {:border "1px solid black" :padding "6px"}} h])]]
        [:tbody
         (for [{:keys [class category total-mass revenue]} blocks]
              ^{:key (str class "-" category)}
              [:tr
               [:td {:style {:border "1px solid black" :padding "6px"}} class]
               [:td {:style {:border "1px solid black" :padding "6px"}} category]
               [:td {:style {:border "1px solid black" :padding "6px"}}
                (.toFixed total-mass 2)]
               [:td {:style {:border "1px solid black" :padding "6px"}}
                (.toFixed revenue 2)]])]]
       [:p {:style {:margin "10px 0" :font-weight "bold"}}
        (str "Total predicted revenue: "
             (.toFixed total-revenue 2)
             " EUR")]])

(defn page []
      [:div
       [:h2 "Production Prediction (Next Month)"]

       [:button
        {:on-click
         (fn []
             (reset! loading? true)
             (-> (api/get-prediction)
                 (.then #(reset! result %)))
             (-> (api/get-block-prediction)
                 (.then #(reset! block-result %)))
             (-> (js/Promise.all [])
                 (.finally #(reset! loading? false))))}
        "Run prediction"]

       (when @loading?
             [:p "Predicting..."])

       (when (and @result @block-result)
             [:div {:style {:margin-top "20px"}}
              [:h3
               (str "Prediction for "
                    (:month @result) "/"
                    (:year @result))]

              [:p
               [:b "Total mass: "]
               (.toFixed (:total-mass @result) 2)
               " tons"]

              [prediction-table @block-result]])])