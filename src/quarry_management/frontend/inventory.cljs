(ns quarry-management.frontend.inventory
  (:require
    [reagent.core :as r]
    [quarry-management.frontend.api :as api]))

(def blocks (r/atom []))
(def displayed-blocks (r/atom []))

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
      [:div {:style {:display "flex" :gap "10px" :flex-wrap "wrap" :margin-bottom "15px"}}

       [:select
        {:value (:mass-range @filter-ui)
         :on-change #(do
                       (swap! filter-ui assoc :mass-range (.. % -target -value))
                       (swap! filters assoc :mass-range
                              (when-not (= (.. % -target -value) "")
                                        (keyword (.. % -target -value)))))}
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
         :on-change #(do
                       (swap! filter-ui assoc :date (.. % -target -value))
                       (swap! filters assoc :date
                              (when-not (= (.. % -target -value) "")
                                        (.. % -target -value))))}]

       [:select
        {:value (:class @filter-ui)
         :on-change #(do
                       (swap! filter-ui assoc :class (.. % -target -value))
                       (swap! filters assoc :class
                              (when-not (= (.. % -target -value) "")
                                        (.. % -target -value))))}
        [:option {:value ""} "Class"]
        [:option {:value "A"} "A"]
        [:option {:value "B"} "B"]
        [:option {:value "C"} "C"]]

       [:select
        {:value (:category @filter-ui)
         :on-change #(do
                       (swap! filter-ui assoc :category (.. % -target -value))
                       (swap! filters assoc :category
                              (when-not (= (.. % -target -value) "")
                                        (js/parseInt (.. % -target -value)))))}
        [:option {:value ""} "Category"]
        [:option {:value "1"} "1"]
        [:option {:value "2"} "2"]
        [:option {:value "3"} "3"]]

       [:button {:on-click apply-filters} "Filter"]
       [:button {:on-click reset-filters} "Show all"]])

(def cell-style
  {:border "1px solid black"
   :padding "4px"
   :font-size "13px"
   :white-space "nowrap"
   :text-align "center"})

(def header-style
  (assoc cell-style :font-weight "bold" :background "#f2f2f2"))

(defn blocks-table []
      [:div {:style {:max-height "400px" :overflow "auto" :border "1px solid #ccc" :display "inline-block"}}
       [:table {:style {:border-collapse "collapse"}}
        [:thead
         [:tr
          [:th {:style header-style} "ID"]
          [:th {:style header-style} "Mass (t)"]
          [:th {:style header-style} "Class"]
          [:th {:style header-style} "Category"]
          [:th {:style header-style} "Date Extracted"]]]
        [:tbody
         (for [b @displayed-blocks]
              ^{:key (:id b)}
              [:tr
               [:td {:style cell-style} (:id b)]
               [:td {:style cell-style} (:weight-t b)]
               [:td {:style cell-style} (:class b)]
               [:td {:style cell-style} (:category b)]
               [:td {:style cell-style}
                (when-let [d (:extraction-date b)]
                          (subs (str d) 0 10))]])]]])

(defn page []
      (r/create-class
        {:component-did-mount load-blocks
         :reagent-render
         (fn []
             [:div
              [:h2 "Inventory"]
              [filters-ui]
              (if (empty? @displayed-blocks)
                [:p "No matching blocks."]
                [blocks-table])])}))