(ns hurdle.main
  (:require
    [c3kit.wire.js :as wjs]
    [reagent.dom :as rdom]
    [reagent.core :as r]
    [hurdle.board :as b]
    [hurdle.keyboard :as k]))

(def starting-state {:word      nil
                     :correct   []
                     :almost    []
                     :not-found []})

(defonce state (r/atom starting-state))

(defn app []
  [:div {:id "main-container"}
   [b/board]
   [k/keyboard]])

#_(defonce started?
    (add-watch setup/state :auto-turn setup/auto-advance))

(defn ^:export main []
  (rdom/render [app] (wjs/element-by-id "app")))
