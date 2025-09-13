(ns hurdle.keyboard-spec
  (:require-macros [speclj.core :refer [should=
                                        should
                                        it
                                        describe
                                        before
                                        with-stubs]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [hurdle.main :as sut]))

(describe "keyboard"
  (with-stubs)
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "draws a letter"
    (should-select ".letter"))

  (it "draws keyboard"
    (should-select "#keyboard"))

  (it "draws 26 letters"
    (should= 26 (count (wire/select-all ".letter"))))

  #_(it "special keys"
    (should-select "#enter")))


