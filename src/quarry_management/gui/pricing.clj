(ns quarry-management.gui.pricing
  (:require [quarry-management.pricing :as pricing])
  (:import [javax.swing JFrame JPanel JLabel JTextField JButton JComboBox JOptionPane]
           [java.awt GridLayout]))

(defn open []
  (let [frame (JFrame. "Pricing")
        panel (JPanel. (GridLayout. 0 2 5 5))

        class-box (JComboBox. (into-array String ["", "A" "B" "C"]))
        category-box (JComboBox. (into-array String ["", "1" "2" "3"]))
        weight-field (JTextField.)
        result-field (JTextField.)]

    (.setEditable result-field false)

    (doseq [[label comp] [["Class" class-box]
                          ["Category" category-box]
                          ["Weight (t)" weight-field]
                          ["Estimated price" result-field]]]
      (.add panel (JLabel. label))
      (.add panel comp))

    (let [btn (JButton. "Calculate price")]
      (.addActionListener
        btn
        (proxy [java.awt.event.ActionListener] []
          (actionPerformed [_]
            (let [class (.getSelectedItem class-box)
                  category-str (.getSelectedItem category-box)
                  weight-str (.getText weight-field)]

              (if (or
                    (empty? (str class))
                    (empty? (str category-str))
                    (empty? weight-str))
                (JOptionPane/showMessageDialog
                  frame
                  "Please select class, category and enter weight."
                  "Missing data"
                  JOptionPane/WARNING_MESSAGE)

                (try
                  (let [category (Integer/parseInt category-str)
                        weight (Double/parseDouble weight-str)
                        price (pricing/block-price
                                {:class class
                                 :category category
                                 :weight-t weight})]
                    (.setText result-field (str price)))
                  (catch Exception _
                    (JOptionPane/showMessageDialog
                      frame
                      "Weight must be a number."
                      "Invalid input"
                      JOptionPane/ERROR_MESSAGE))))))))
      (.add panel (JLabel. ""))
      (.add panel btn))

    (doto frame
      (.add panel)
      (.pack)
      (.setLocationRelativeTo nil)
      (.setVisible true))))
