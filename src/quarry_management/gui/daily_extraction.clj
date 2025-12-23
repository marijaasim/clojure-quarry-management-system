(ns quarry-management.gui.daily-extraction)

(defn open []
  (let [frame (javax.swing.JFrame. "Daily Extraction")
        panel (javax.swing.JPanel.)]

    (.add panel (javax.swing.JLabel. "Daily Extraction – form will be here"))

    (doto frame
      (.add panel)
      (.setSize 400 300)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
