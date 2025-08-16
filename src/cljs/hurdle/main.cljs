(ns hurdle.main
  (:require
    [c3kit.wire.js :as wjs]
    [reagent.dom :as rdom]))

(defn app []
  [:div {:id "main-container"}])

#_(defonce started?
    (add-watch setup/state :auto-turn setup/auto-advance))

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "app") ))
