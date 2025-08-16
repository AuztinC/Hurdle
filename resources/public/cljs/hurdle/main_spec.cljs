(ns hurdle.main-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        before
                                        with-stubs]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [hurdle.main :as sut]))

(describe "main cljs"
  (with-stubs)
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "game container"
    (should-select "#main-container"))
  )

