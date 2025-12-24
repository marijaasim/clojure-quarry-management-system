(ns quarry-management.gui.block-info
  (:require [quarry-management.block :as block])
  (:import [javax.swing JFrame JPanel JLabel JTextField JButton JComboBox]
           [java.awt GridLayout]))

(defn open
  ([] (open nil))
  ([block]
  (let [frame (JFrame. "Block Info")
        panel (JPanel. (GridLayout. 0 2 5 5))

        id-field (JTextField. "0")
        length-field (JTextField. "")
        width-field (JTextField. "")
        height-field (JTextField. "")
        volume-field (JTextField. "")
        weight-field (JTextField. "")
        class-field (JTextField. "")
        category-field (JTextField. "")

        characteristics-box (JComboBox. (into-array String ["no cracks|minimal cracks|uniform color"
                                                            "visible veins|small cracks|not perfect"
                                                            "many cracks|bad color|deformations"]))
        waste-box (JComboBox. (into-array String ["<=19" "20-40" ">=41"]))

        save-btn (JButton. "SAVE")]

    (when block
      (.setText id-field (str (:id block)))
      (.setText length-field (str (:length-cm block)))
      (.setText width-field (str (:width-cm block)))
      (.setText height-field (str (:height-cm block)))
      (.setText volume-field (str (:volume-m3 block)))
      (.setText weight-field (str (:weight-t block)))
      (.setText class-field (str (:class block)))
      (.setText category-field (str (:category block))))

    (.setEditable id-field false)
    (.setEditable volume-field false)
    (.setEditable weight-field false)
    (.setEditable class-field false)
    (.setEditable category-field false)

    (doseq [[label comp] [["ID" id-field]
                          ["Length (cm)" length-field]
                          ["Width (cm)" width-field]
                          ["Height (cm)" height-field]
                          ["Volume (m³)" volume-field]
                          ["Weight (t)" weight-field]
                          ["Characteristics" characteristics-box]
                          ["Category" category-field]
                          ["Waste %" waste-box]
                          ["Class" class-field]]]
      (.add panel (JLabel. label))
      (.add panel comp))

    (.addActionListener save-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (println "SAVE clicked"))))
    (.addActionListener characteristics-box
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (let [sel (.getSelectedItem characteristics-box)
                                  cat (block/determine-category sel)]
                              (.setText category-field (str cat))))))
    (.addActionListener waste-box
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (let [sel (.getSelectedItem waste-box)
                                  perc (cond
                                         (= sel "<=19") 19
                                         (= sel "20-40") 30
                                         (= sel ">=41") 41)
                                  cls (block/determine-class perc)]
                              (.setText class-field cls)))))
    (.add panel (JLabel. ""))
    (.add panel save-btn)

    (doto frame
      (.add panel)
      (.pack)
      (.setLocationRelativeTo nil)
      (.setVisible true)))))