(ns hurdle.board-spec
  (:require-macros [speclj.core :refer [should=
                                        it
                                        describe
                                        before
                                        with-stubs]]
                   [c3kit.wire.spec-helperc :refer [should-select]])
  (:require [speclj.core]
            [c3kit.wire.spec-helper :as wire]
            [hurdle.main :as sut]))

(describe "board"
  (with-stubs)
  (wire/with-root-dom)
  (before (wire/render [sut/app]))

  (it "draws a cell"
    (should-select "#cell-1"))

  (it "draws a row of cells"
    (should-select "#word-row-1")
    (should-select "#cell-0")
    (should-select "#cell-1")
    (should-select "#cell-2")
    (should-select "#cell-3")
    (should-select "#cell-4"))

  (it "draws 6 rows "
    (should-select "#board")
    (should-select "#word-row-1")
    (should-select "#word-row-2")))
