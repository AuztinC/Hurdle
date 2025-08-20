(ns hurdle.word-check-spec
  (:require [speclj.core :refer :all]
            [hurdle.word-check :as sut]))

(def example-response
  {:word "WORDS" :wordHints ["1" "2" "3"]})

(def state {:correct []
            :almost []
            :not-found []})

(describe "word-check"

  (context "single letter - bad input"

    (it "only gets added to one key"
      (let [letter {:val "Z" :idx 0}
            out (sut/val-exists? state example-response letter)]
        (should= [] (:almost out))
        (should= [] (:correct out))
        (should= ["Z"] (:not-found out))))

    (it "correct letter - wrong index"
      (let [letter {:val "O" :idx 0}
            out (sut/val-exists? state example-response letter)]
        (should= ["O"] (:almost out)))))

  (context "single letter - good input"
    (it "correct letter - correct index"
      (let [letter {:val "O" :index 1}
            out (sut/val-exists? state example-response letter)]
        (should= ["O"] (:correct out))))))
