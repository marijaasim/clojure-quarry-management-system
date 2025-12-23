(ns quarry-management.gui.main
  (:require [quarry-management.gui.daily-extraction :as daily]
            [quarry-management.gui.inventory :as inventory]
            [quarry-management.gui.pricing :as pricing]))

(defn main-frame []
  (let [frame (javax.swing.JFrame. "Quarry Management System")
        panel (javax.swing.JPanel.)]

    (doseq [[label action] [["Daily Extraction" daily/open]
                            ["Inventory" inventory/open]
                            ["Pricing" pricing/open]]]
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
