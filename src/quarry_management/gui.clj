(ns quarry-management.gui)

(defn main-frame []
  (let [frame (javax.swing.JFrame. "Quarry Management System")
        panel (javax.swing.JPanel.)]

    (doseq [[label action] [["Daily Extraction" #(println "Daily Extraction clicked")]
                            ["Inventory" #(println "Inventory clicked")]
                            ["Pricing" #(println "Pricing clicked")]]]
      (let [btn (javax.swing.JButton. ^String label)]
        (.addActionListener btn
                            (proxy [java.awt.event.ActionListener] []
                              (actionPerformed [_] (action))))
        (.add panel ^java.awt.Component btn)))

    (doto frame
      (.add panel)
      (.setSize 400 200)
      (.setDefaultCloseOperation javax.swing.JFrame/EXIT_ON_CLOSE)
      (.setVisible true))))

(defn -main []
  (main-frame))
