(ns quarry-management.gui.inventory
  (:require [quarry-management.block :as block]
            [quarry-management.gui.block-info :as block-info])
  (:import
    [javax.swing JFrame JPanel JScrollPane JTable JButton]
    [javax.swing.table DefaultTableModel]
    [java.awt BorderLayout FlowLayout]
    [javax.swing JOptionPane]))

(defn open []
  (let [frame (JFrame. "Inventory")

        column-names (into-array String ["ID" "Weight (t)" "Class" "Category"])

        data (into-array
               (map (fn [b]
                      (into-array Object
                                  [(:id b)
                                   (double (:weight-t b))
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
                            (let [row (.getSelectedRow table)]
                              (if (< row 0)
                                (JOptionPane/showMessageDialog
                                  frame
                                  "Please select a block from the table first."
                                  "No selection"
                                  JOptionPane/WARNING_MESSAGE)
                                (let [id (.getValueAt table row 0)
                                      block (first (filter #(= (:id %) id) block/blocks))]
                                  (block-info/open block)))))))

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