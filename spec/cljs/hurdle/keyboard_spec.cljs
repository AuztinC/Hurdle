(ns hurdle.keyboard-spec
  (:require-macros [speclj.core :refer [should=
                                        should
                                        it
                                        describe
                                        before
                                        with-stubs
                                        context]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [hurdle.config :as config]
            [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [hurdle.main :as main]))

(describe "keyboard"
  (with-stubs)
  (wire/with-root-dom)
  (before
    (reset! config/state {:word "WORDS"})
    (wire/render [main/app]))

  (context "layout"
   (it "draws a letter"
    (should-select ".letter"))

  (it "draws keyboard"
    (should-select "#keyboard"))

  (it "draws 26 letters"
    (should= 26 (count (wire/select-all ".letter"))))

  (it "special keys"
    (should-select "#enter")
    (should-select "#backspace")))

  (context "input"
    (it "letter key updates ratom"
      (wire/click "#Q")
      (should= "Q" (:input @config/state)))

    (it "backspace removes a letter from input"
      (swap! config/state assoc :input "WW")
      (should= "WW" (:input @config/state))
      (wire/click "#backspace")
      (should= "W" (:input @config/state)))

    (it "input must be 5 letters"))
  )


