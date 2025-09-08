(ns hurdle.word-checkc
  (:require [clojure.string :as str]))

(defn correct-word? [guess state]
  (= (str/upper-case guess) (:word state)))

(defn single-letter! [state
                      {:keys [word _word-hints] :as _word}
                      {:keys [val index] :as _letter}]
  (if (str/includes? word val)
    (let [indexed-word (vec (map-indexed (fn [idx ltr] [idx (str ltr)]) word))
          status (if (= val (second (get indexed-word index nil)))
                   :correct
                   :almost)]
      (update state status conj val))

    (update state :not-found conj val)))

(defn guess-handler [guess state]
  (when (correct-word? guess state)
    (assoc state :screen :game-over)))
