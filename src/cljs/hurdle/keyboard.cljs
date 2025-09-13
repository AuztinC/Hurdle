(ns hurdle.keyboard)

(def rows [[\Q \W \E \R \T \Y \U \I \O \P] [\A \S \D \F \G \H \J \K \L] [\Z \X \C \V \B \N \M]])

(defn letter [idx ltr]
  [:div.letter {:key idx} ltr])

(defn keyboard []
  [:div#keyboard
   (map-indexed
     (fn [row-idx row]
       [:div.row {:id (str "row-" row-idx) ;; TODO ARC - third row needs enter and backspace/delete
                  :key row-idx}
        (map-indexed
          (fn [col-idx ltr]
            ^{:key (str row-idx "-" col-idx)}
            [letter col-idx ltr])
          row)])
     rows)])
