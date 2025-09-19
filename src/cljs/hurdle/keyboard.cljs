(ns hurdle.keyboard
  (:require [clojure.string :as str]
            [hurdle.config :as config]))

(def rows [[\Q \W \E \R \T \Y \U \I \O \P] [\A \S \D \F \G \H \J \K \L] [\Z \X \C \V \B \N \M]])

(defn letter [idx ltr]
  [:div.letter {:id       ltr
                :key      idx
                :on-click #(swap! config/state assoc :input (str/join ltr))}
   ltr])

(defn keyboard []
  [:div#keyboard
   (map-indexed
     (fn [row-idx row]
       [:div.row {:id  (str "row-" row-idx)
                  :key row-idx}
        [:<>
         (when (= 2 row-idx) [:div#enter.special-key {:key (dec row-idx)} "Enter"])
         (map-indexed
           (fn [col-idx ltr]
             ^{:key (str row-idx "-" col-idx)}
             [letter col-idx ltr])
           row)
         (when (= 2 row-idx) [:div#backspace.special-key
                              {:key      (inc row-idx)
                               :on-click #(swap! config/state assoc :input (first (rest (:input @config/state))))}
                              "Backspace"])]])
     rows)])
