(ns quarry-management.frontend.inventory
  (:require
    [reagent.core :as r]
    [quarry-management.frontend.api :as api]))

(def blocks (r/atom []))
(def displayed-blocks (r/atom []))
(def selected-block (r/atom nil))
(def edit-form (r/atom nil))
(def edit-error (r/atom nil))

(defn class->waste [cls]
      (case cls
            "A" "<=19"
            "B" "20-40"
            "C" ">=41"
            ""))

(defn category->characteristics [cat]
      (case cat
            1 "no cracks|minimal cracks|uniform color"
            2 "visible veins|small cracks|not perfect"
            3 "many cracks|bad color|deformations"
            ""))

(def filters
  (r/atom {:mass-range nil
           :date nil
           :class nil
           :category nil}))

(def filter-ui
  (r/atom {:mass-range ""
           :date ""
           :class ""
           :category ""}))

(defn load-blocks []
      (api/get-blocks
        (fn [data]
            (reset! blocks data)
            (reset! displayed-blocks data))))

(defn mass-in-range? [mass range]
      (case range
            :lt04 (< mass 0.4)
            :04-08 (and (>= mass 0.4) (< mass 0.8))
            :08-12 (and (>= mass 0.8) (< mass 1.2))
            :12-14 (and (>= mass 1.2) (< mass 1.4))
            :14-16 (and (>= mass 1.4) (< mass 1.6))
            :16-18 (and (>= mass 1.6) (< mass 1.8))
            :18-20 (and (>= mass 1.8) (< mass 2.0))
            :gt20 (>= mass 2.0)
            true))

(defn apply-filters []
      (reset! displayed-blocks
              (filter
                (fn [b]
                    (and
                      (if-let [m (:mass-range @filters)]
                              (mass-in-range? (:weight-t b) m)
                              true)
                      (if-let [d (:date @filters)]
                              (= (subs (str (:extraction-date b)) 0 10) d)
                              true)
                      (if-let [c (:class @filters)]
                              (= (:class b) c)
                              true)
                      (if-let [cat (:category @filters)]
                              (= (:category b) cat)
                              true)))
                @blocks)))

(defn reset-filters []
      (reset! filters {:mass-range nil :date nil :class nil :category nil})
      (reset! filter-ui {:mass-range "" :date "" :class "" :category ""})
      (reset! displayed-blocks @blocks))

(defn filters-ui []
      [:div {:style {:display "flex" :gap "10px" :margin-bottom "15px"}}

       [:select
        {:value (:mass-range @filter-ui)
         :on-change #(swap! filter-ui assoc :mass-range (.. % -target -value))}
        [:option {:value ""} "Mass (t)"]
        [:option {:value "lt04"} "< 0.4"]
        [:option {:value "04-08"} "0.4 – 0.8"]
        [:option {:value "08-12"} "0.8 – 1.2"]
        [:option {:value "12-14"} "1.2 – 1.4"]
        [:option {:value "14-16"} "1.4 – 1.6"]
        [:option {:value "16-18"} "1.6 – 1.8"]
        [:option {:value "18-20"} "1.8 – 2.0"]
        [:option {:value "gt20"} "> 2.0"]]

       [:input
        {:type "date"
         :value (:date @filter-ui)
         :on-change #(swap! filter-ui assoc :date (.. % -target -value))}]

       [:select
        {:value (:class @filter-ui)
         :on-change #(swap! filter-ui assoc :class (.. % -target -value))}
        [:option {:value ""} "Class"]
        [:option {:value "A"} "A"]
        [:option {:value "B"} "B"]
        [:option {:value "C"} "C"]]

       [:select
        {:value (:category @filter-ui)
         :on-change #(swap! filter-ui assoc :category (.. % -target -value))}
        [:option {:value ""} "Category"]
        [:option {:value "1"} "1"]
        [:option {:value "2"} "2"]
        [:option {:value "3"} "3"]]

       [:button
        {:on-click #(do
                      (swap! filters assoc
                             :mass-range (some-> (:mass-range @filter-ui) not-empty keyword)
                             :date (not-empty (:date @filter-ui))
                             :class (not-empty (:class @filter-ui))
                             :category (some-> (:category @filter-ui) not-empty js/parseInt))
                      (apply-filters))}
        "Filter"]

       [:button {:on-click reset-filters} "Show all"]])

(def cell-style
  {:border "1px solid #ccc" :padding "4px" :font-size "13px" :text-align "center"})

(def header-style
  (assoc cell-style :font-weight "bold" :background "#f2f2f2"))

(defn open-edit []
      (when-let [b @selected-block]
                (reset! edit-form
                        (assoc b
                               :characteristics (category->characteristics (:category b))
                               :waste (class->waste (:class b))
                               :waste-percentage (case (:class b)
                                                       "A" 19
                                                       "B" 30
                                                       "C" 41)))))

(defn blocks-table []
      (let [selected-id (:id @selected-block)]
           [:table {:style {:border-collapse "collapse" :width "100%"}}
            [:thead
             [:tr
              [:th {:style header-style} "ID"]
              [:th {:style header-style} "Mass (t)"]
              [:th {:style header-style} "Class"]
              [:th {:style header-style} "Category"]
              [:th {:style header-style} "Date Extracted"]]]
            [:tbody
             (doall
               (for [b @displayed-blocks]
                    (let [active? (= (:id b) selected-id)]
                         ^{:key (:id b)}
                         [:tr
                          {:on-click #(reset! selected-block b)
                           :style {:cursor "pointer"
                                   :background (when active? "#cce5ff")
                                   :font-weight (when active? "bold")}}
                          [:td {:style cell-style} (:id b)]
                          [:td {:style cell-style} (.toFixed (:weight-t b) 3)]
                          [:td {:style cell-style} (:class b)]
                          [:td {:style cell-style} (:category b)]
                          [:td {:style cell-style}
                           (subs (str (:extraction-date b)) 0 10)]])))]]))

(defn edit-panel []
      (when @edit-form
            [:div {:style {:width "280px" :border-left "2px solid #ccc" :padding "10px"}}
             [:h3 "Edit block"]

             [:div "ID"]
             [:input {:value (:id @edit-form) :disabled true}]

             (doall
               (for [[k label] [[:length-cm "Length (cm)"]
                                [:width-cm "Width (cm)"]
                                [:height-cm "Height (cm)"]]]
                    ^{:key k}
                    [:<>
                     [:div label]
                     [:input
                      {:value (get @edit-form k)
                       :on-change #(let [v (.. % -target -value)]
                                        (swap! edit-form assoc k
                                               (when (not-empty v)
                                                     (js/parseFloat v))))}]]))

             [:div "Mass (t)"]
             [:input {:value (.toFixed (:weight-t @edit-form) 3) :disabled true}]

             [:div "Characteristics"]
             [:select
              {:value (:characteristics @edit-form)
               :on-change #(swap! edit-form assoc
                                  :characteristics
                                  (.. % -target -value))}
              [:option "no cracks|minimal cracks|uniform color"]
              [:option "visible veins|small cracks|not perfect"]
              [:option "many cracks|bad color|deformations"]]

             [:div
              {:style {:margin-top "6px"
                       :font-size "13px"
                       :color "#555"}}
              (when (:category @edit-form)
                    (str "Category: " (:category @edit-form)))]

             [:div "Waste %"]
             [:select
              {:value (:waste @edit-form)
               :on-change #(let [v (.. % -target -value)]
                                (swap! edit-form assoc
                                       :waste v
                                       :waste-percentage
                                       (case v
                                             "<=19" 19
                                             "20-40" 30
                                             ">=41" 41
                                             nil)))}
              [:option "<=19"]
              [:option "20-40"]
              [:option ">=41"]]

             [:div
              {:style {:margin-top "6px"
                       :font-size "13px"
                       :color "#555"}}
              (when (:class @edit-form)
                    (str "Class: " (:class @edit-form)))]

             (when @edit-error
                   [:div {:style {:color "red"
                                  :margin-top "8px"
                                  :font-size "13px"}}
                    @edit-error])

             [:div {:style {:display "flex" :gap "10px" :margin-top "10px"}}

              [:button
               {:on-click
                #(let [{:keys [length-cm width-cm height-cm waste characteristics]} @edit-form]
                      (cond
                        (or (nil? length-cm)
                            (nil? width-cm)
                            (nil? height-cm))
                        (reset! edit-error "All fields are required.")

                        (or (<= length-cm 0)
                            (<= width-cm 0)
                            (<= height-cm 0))
                        (reset! edit-error "Dimensions must be greater than 0.")

                        :else
                        (do
                          (reset! edit-error nil)
                          (api/update-block
                            @edit-form
                            (fn []
                                (load-blocks)
                                (reset! edit-form nil)
                                (reset! selected-block nil))))))}
               "Save"]

              [:button
               {:on-click #(do
                             (reset! edit-form nil)
                             (reset! selected-block nil))}
               "Cancel"]]]))

(defn page []
      (r/create-class
        {:component-did-mount load-blocks
         :reagent-render
         (fn []
             [:div {:style {:display "flex"}}
              [:div {:style {:flex "1"}}
               [:h2 "Inventory"]
               [filters-ui]
               [:div {:style {:max-height "400px" :overflow "auto"}}
                [blocks-table]]
               [:button {:on-click open-edit
                         :disabled (nil? @selected-block)}
                "Edit block"]
               [:button
                {:style {:margin-left "10px"
                         :background "#ffdddd"}
                 :disabled (nil? @selected-block)
                 :on-click #(do
                              (js/console.log "SELECTED BLOCK =" (clj->js @selected-block))
                              (js/console.log "ID =" (:id @selected-block))
                              (when (js/confirm "Are you sure you want to delete this block?")
                                    (api/delete-block
                                      (:id @selected-block)
                                      (fn []
                                          (load-blocks)
                                          (reset! selected-block nil)))))}
                "Delete block"]]
              [edit-panel]])}))
