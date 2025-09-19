(ns hurdle.config
  (:require [reagent.core :as r]))

(def starting-state {:word      nil
                     :correct   []
                     :almost    []
                     :not-found []})

(defonce state (r/atom starting-state))