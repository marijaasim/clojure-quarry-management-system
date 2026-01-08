(ns quarry-management.frontend.daily-extraction
  (:require
    [reagent.core :as r]
    [quarry-management.frontend.api :as api]))

(def selected-date (r/atom ""))
(def daily-mass (r/atom nil))
(def daily-blocks (r/atom []))

(def create-form (r/atom nil))
(def create-error (r/atom nil))

(def cell-style
  {:border "1px solid #ccc" :padding "4px" :font-size "13px" :text-align "center"})

(def header-style
  (assoc cell-style :font-weight "bold" :background "#f2f2f2"))

(defn total-blocks-mass []
      (reduce + 0 (map :weight-t @daily-blocks)))

(defn open-create []
      (reset! create-form
              {:length-cm nil
               :width-cm nil
               :height-cm nil
               :characteristics ""
               :waste ""
               :class nil
               :category nil
               :weight-t nil}))

(defn create-panel []
      (when @create-form
            [:div {:style {:width "280px" :border-left "2px solid #ccc" :padding "10px"}}

             [:h3 "Add block"]

             (doall
               (for [[k label] [[:length-cm "Length (cm)"]
                                [:width-cm "Width (cm)"]
                                [:height-cm "Height (cm)"]]]
                    ^{:key k}
                    [:<>
                     [:div label]
                     [:input
                      {:on-change #(let [v (.. % -target -value)]
                                        (swap! create-form assoc k
                                               (when (not-empty v)
                                                     (js/parseFloat v))))}]]))

             [:div "Characteristics"]
             [:select
              {:value (or (:characteristics @create-form) "")
               :on-change #(swap! create-form assoc
                                  :characteristics (.. % -target -value))}
              [:option {:value ""} "-- select --"]
              [:option "no cracks|minimal cracks|uniform color"]
              [:option "visible veins|small cracks|not perfect"]
              [:option "many cracks|bad color|deformations"]]

             [:div "Waste %"]
             [:select
              {:value (or (:waste @create-form) "")
               :on-change #(let [v (.. % -target -value)]
                                (swap! create-form assoc
                                       :waste v
                                       :class (case v "<=19" "A" "20-40" "B" ">=41" "C")
                                       :category (case v "<=19" 1 "20-40" 2 ">=41" 3)))}
              [:option {:value ""} "-- select --"]
              [:option "<=19"]
              [:option "20-40"]
              [:option ">=41"]]

             (when @create-error
                   [:div {:style {:color "red" :margin-top "6px"}} @create-error])

             [:div {:style {:display "flex" :gap "10px" :margin-top "10px"}}

              [:button
               {:on-click
                #(let [{:keys [length-cm width-cm height-cm waste characteristics]} @create-form]
                      (cond
                        (or (nil? length-cm)
                            (nil? width-cm)
                            (nil? height-cm)
                            (empty? characteristics)
                            (empty? waste))
                        (reset! create-error "All fields are required.")

                        (or (<= length-cm 0)
                            (<= width-cm 0)
                            (<= height-cm 0))
                        (reset! create-error "Dimensions must be positive numbers.")

                        :else
                        (do
                          (reset! create-error nil)
                          (api/describe-block
                            {:length-cm length-cm
                             :width-cm width-cm
                             :height-cm height-cm}
                            (fn [{:keys [weight-t]}]
                                (swap! daily-blocks conj
                                       (assoc @create-form :weight-t weight-t))
                                (reset! create-form nil))))))}
               "Save"]

              [:button {:on-click #(reset! create-form nil)} "Cancel"]]]))

(defn blocks-table []
      [:table {:style {:border-collapse "collapse" :width "100%" :margin-top "15px"}}
       [:thead
        [:tr
         [:th {:style header-style} "Mass (t)"]
         [:th {:style header-style} "Class"]
         [:th {:style header-style} "Category"]]]
       [:tbody
        (doall
          (for [[i b] (map-indexed vector @daily-blocks)]
               ^{:key i}
               [:tr
                [:td {:style cell-style} (.toFixed (:weight-t b) 3)]
                [:td {:style cell-style} (:class b)]
                [:td {:style cell-style} (:category b)]]))]])

(defn page []
      (let [blocks-mass (total-blocks-mass)
            mass-exceeded? (and @daily-mass (> blocks-mass @daily-mass))]
           [:div {:style {:display "flex"}}

            [:div {:style {:flex "1"}}
             [:h2 "Daily extraction"]

             [:div "Date"]
             [:input {:type "date"
                      :value @selected-date
                      :on-change #(reset! selected-date (.. % -target -value))}]

             [:div {:style {:margin-top "10px"}} "Extracted mass (t)"]
             [:input {:type "number"
                      :value (or @daily-mass "")
                      :on-change #(let [v (.. % -target -value)]
                                       (reset! daily-mass
                                               (when (not-empty v)
                                                     (js/parseFloat v))))}]

             [:div {:style {:margin-top "10px"}}]
             [:button {:on-click open-create} "Add block"]

             [blocks-table]

             [:div {:style {:margin-top "10px" :font-size "13px"}}
              [:b "Blocks mass: "] (.toFixed blocks-mass 3) " t"]

             (when mass-exceeded?
                   [:div {:style {:color "red" :margin-top "5px"}}
                    "Total block mass cannot exceed extracted mass."])

             [:button
              {:style {:margin-top "15px"}
               :disabled (or (empty? @selected-date)
                             (nil? @daily-mass)
                             mass-exceeded?)
               :on-click
               #(when (js/confirm "Are you sure you want to finish this daily extraction?")
                      (api/create-daily-extraction
                        {:date @selected-date
                         :total-mass @daily-mass
                         :blocks @daily-blocks}
                        (fn [_]
                            (reset! selected-date "")
                            (reset! daily-mass nil)
                            (reset! daily-blocks [])
                            (js/alert "Daily extraction saved successfully."))))}
              "Finish daily extraction"]]

            [create-panel]]))