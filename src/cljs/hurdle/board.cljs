(ns hurdle.board)

(defn cell [id]
  [:div {:id (str "cell-"id)
         :class "cell"
         :key id}])

(defn word-row [id]
  [:div {:id (str "word-row-" id)
         :class "word-row"
         :key id}
   (map-indexed (fn [idx _cell]
                  (cell idx))
     (repeat 5 cell))])

(defn board []
  [:div#board
   (map-indexed (fn [idx _row]
                  (word-row idx))
     (repeat 6 word-row))])