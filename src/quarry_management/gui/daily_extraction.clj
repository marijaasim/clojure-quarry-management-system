(ns quarry-management.gui.daily-extraction
  (:require [quarry-management.gui.block-info :as block-info])
  (:import [javax.swing JFrame JPanel JLabel JTextField JButton JTable JScrollPane]
           [javax.swing.table DefaultTableModel]
           [java.awt BorderLayout GridLayout FlowLayout]))

(defn open []
  (let [frame (JFrame. "Daily Extraction")

        form-panel (JPanel. (GridLayout. 0 2 5 5))
        date-field (JTextField.)
        mass-field (JTextField.)

        column-names (into-array String ["ID" "Weight (t)" "Class" "Category"])
        model (DefaultTableModel. column-names 0)
        table (JTable. model)
        table-scroll (JScrollPane. table)

        button-panel (JPanel. (FlowLayout.))
        add-block-btn (JButton. "Add block")
        finish-btn (JButton. "Finish daily extraction")]

    (.add form-panel (JLabel. "Date [dd.mm.yyyy.]"))
    (.add form-panel date-field)

    (.add form-panel (JLabel. "Extracted mass (t)"))
    (.add form-panel mass-field)

    (.addActionListener add-block-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (block-info/open))))

    (.addActionListener finish-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (println "Finish daily extraction clicked"))))

    (.add button-panel add-block-btn)
    (.add button-panel finish-btn)

    (.setLayout frame (BorderLayout.))
    (.add frame form-panel BorderLayout/NORTH)
    (.add frame table-scroll BorderLayout/CENTER)
    (.add frame button-panel BorderLayout/SOUTH)

    (doto frame
      (.setSize 700 450)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
