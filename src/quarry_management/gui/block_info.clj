(ns quarry-management.gui.block-info
  (:import [javax.swing JFrame JPanel JLabel JTextField JButton JComboBox]
           [java.awt GridLayout]))

(defn open []
  (let [frame (JFrame. "Block Info")
        panel (JPanel. (GridLayout. 0 2 5 5))

        id-field (JTextField. "0")
        length-field (JTextField. "")
        width-field (JTextField. "")
        height-field (JTextField. "")
        volume-field (JTextField. "")
        weight-field (JTextField. "")
        characteristics-box (JComboBox. (into-array String ["no cracks|minimal cracks|uniform color"
                                                            "visible veins|small cracks|not perfect"
                                                            "many cracks|bad color|deformations"]))
        waste-box (JComboBox. (into-array String ["<=19" "20-40" ">=41"]))
        class-field (JTextField. "")
        category-field (JTextField. "")]

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

    (let [save-btn (JButton. "SAVE")]
      (.addActionListener save-btn
                          (proxy [java.awt.event.ActionListener] []
                            (actionPerformed [_]
                              (println "SAVE clicked"))))
      (.add panel (JLabel. ""))
      (.add panel save-btn))

    (doto frame
      (.add panel)
      (.pack)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
