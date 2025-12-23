(ns quarry-management.gui.inventory
  (:require [quarry-management.block :as block]
            [quarry-management.gui.block-info :as block-info])
  (:import
    [javax.swing JFrame JPanel JScrollPane JTable JButton]
    [javax.swing.table DefaultTableModel]
    [java.awt BorderLayout FlowLayout]))

(defn open []
  (let [frame (JFrame. "Inventory")

        column-names (into-array String ["ID" "Weight (t)" "Class" "Category"])

        data (into-array
               (map (fn [b]
                      (into-array Object
                                  [(:id b)
                                   (:weight-t b)
                                   (:class b)
                                   (:category b)]))
                    block/blocks))

        model (DefaultTableModel. data column-names)
        table (JTable. model)
        scroll (JScrollPane. table)

        button-panel (JPanel. (FlowLayout.))
        general-btn (JButton. "General Info")
        edit-btn (JButton. "Edit Block")
        delete-btn (JButton. "Delete Block")]

    (.addActionListener general-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (println "General Info clicked"))))

    (.addActionListener edit-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (block-info/open))))

    (.addActionListener delete-btn
                        (proxy [java.awt.event.ActionListener] []
                          (actionPerformed [_]
                            (println "Delete Block clicked"))))

    (.add button-panel general-btn)
    (.add button-panel edit-btn)
    (.add button-panel delete-btn)

    (.setLayout frame (BorderLayout.))
    (.add frame scroll BorderLayout/CENTER)
    (.add frame button-panel BorderLayout/SOUTH)

    (doto frame
      (.setSize 700 400)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
