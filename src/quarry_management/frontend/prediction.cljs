(ns quarry-management.frontend.prediction
  (:require
    [reagent.core :as r]
    [quarry-management.frontend.api :as api]))

(def selected-month (r/atom ""))
(def show-result? (r/atom false))
(def prediction-result (r/atom nil))

(defn page []
      [:div
       [:h2 "Production Prediction"]

       [:div {:style {:margin "20px 0"}}
        [:label {:style {:margin-right "10px"}} "Select month:"]
        [:input
         {:type "month"
          :value @selected-month
          :on-change #(do
                        (reset! selected-month (.. % -target -value))
                        (reset! show-result? false))}]]

       [:button
        {:style {:padding "10px 20px"}
         :disabled (empty? @selected-month)
         :on-click
         #(-> (api/predict @selected-month)
              (.then (fn [res]
                         (reset! prediction-result res)
                         (reset! show-result? true))))}
        "Predict"]

       (when @show-result?
             [:div {:style {:margin-top "30px"}}
              [:h3 "Prediction result"]
              [:p "Estimated extraction: "
               (:estimated-production @prediction-result) " tons"]])])