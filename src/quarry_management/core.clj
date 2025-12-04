(ns quarry-management.core)

(defn volume-m3
  "Calculates volume in m³ from dimensions in cm."
  [length-cm width-cm height-cm]
  (/ (* length-cm width-cm height-cm) 1000000.0))

(defn block-weight
  "Calculates weight in tons (density is 2.75 t/m³)."
  [volume-m3]
  (* volume-m3 2.75))

(defn describe-block
  "Calculates volume and weight from dimensions."
  [length-cm width-cm height-cm]
  (let [v (volume-m3 length-cm width-cm height-cm)
        w (block-weight v)]
    {:volume-m3 v
     :weight-t  w}))
