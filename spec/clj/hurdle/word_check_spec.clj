;(ns hurdle.word-check-spec
;  (:require [speclj.core :refer :all]
;            [hurdle.word-check :as sut]))
;
;(def example-response
;  {:word "WORDS" :wordHints ["1" "2" "3"]})
;
;(def state {:word      (:word example-response)
;            :correct   []
;            :almost    []
;            :not-found []})
;
;(describe "word-check"
;
;  (context "single letter checking"
;
;    (it "wrong letter "
;      (let [letter {:val "Z" :idx 0}
;            out (sut/single-letter! state example-response letter)]
;        (should= [] (:almost out))
;        (should= [] (:correct out))
;        (should= ["Z"] (:not-found out))))
;
;    (it "correct letter - wrong index"
;      (let [letter {:val "O" :idx 0}
;            out (sut/single-letter! state example-response letter)]
;        (should= ["O"] (:almost out))))
;
;    (it "correct letter - correct index"
;      (let [letter {:val "O" :index 1}
;            out (sut/single-letter! state example-response letter)]
;        (should= ["O"] (:correct out)))))
;
;  (context "full word handling"
;    (it "correct full guess"
;      (let [guess "WORDS"]
;        (should (sut/correct-word? guess state))))
;
;    (it "correct letters wrong word"
;      (let [guess "SWORD"]
;        (should-not (sut/correct-word? guess state))))
;
;    (it "handles lower-case"
;      (let [guess "words"]
;        (should (sut/correct-word? guess state)))))
;  )
