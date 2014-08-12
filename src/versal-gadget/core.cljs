(ns versal-gadget.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(def player (js/VersalPlayerAPI.))

(def app-state
  (atom {}))

(defn init []
  (.startListening player)
  (.on player "attributesChanged"
    (fn [attrs]
      (.log js/console attrs)
      (let [cattrs (js->clj attrs)]
        (swap! app-state cattrs)))))

(defn main-view [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (dom/h2 nil "Main view")))))

(defn setup-react []
  (om/root main-view app-state
    {:target (. js/document (querySelector "#app"))}))

(init)
(setup-react)
