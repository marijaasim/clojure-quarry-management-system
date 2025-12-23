(ns quarry-management.gui.pricing)

(defn open []
  (let [frame (javax.swing.JFrame. "Pricing")
        panel (javax.swing.JPanel.)]

    (.add panel (javax.swing.JLabel. "Pricing & Estimated Value"))

    (.add panel (javax.swing.JLabel. "Class:"))
    (.add panel (javax.swing.JComboBox.
                  (into-array ["A" "B" "C"])))

    (.add panel (javax.swing.JLabel. "Category:"))
    (.add panel (javax.swing.JComboBox.
                  (into-array ["1" "2" "3"])))

    (.add panel (javax.swing.JLabel. "Weight (t):"))
    (.add panel (javax.swing.JTextField. 10))

    (let [btn (javax.swing.JButton. "Calculate price")]
      (.addActionListener btn
                          (proxy [java.awt.event.ActionListener] []
                            (actionPerformed [_]
                              (println "Calculate price clicked"))))
      (.add panel btn))

    (doto frame
      (.add panel)
      (.setSize 500 250)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
