(ns hurdle.core-spec
  (:require [speclj.core :refer :all]
            [hurdle.core :as sut]))

(describe "Main clj "
  (it "gets response from gemini"
    (should= -1 (sut/-main))))
