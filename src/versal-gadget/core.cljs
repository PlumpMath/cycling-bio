(ns versal-gadget.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(def player (js/VersalPlayerAPI.))

(def app-state
  (atom {}))

; set app-state to reflect what is received from Player
(defn init []
  (.startListening player)
  (.setHeight player 300)
  (.on player "attributesChanged"
    (fn [attrs]
      (let [cattrs (js->clj attrs :keywordize-keys true)]
        (reset! app-state cattrs)))))

(defn current-hr [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:current-hr 110})
    om/IWillMount
    (will-mount [_]
      ; make it life-like
      (let [change-hr (fn []
                        (let [rand-integer (rand 1)]
                          (if (> rand-integer 0.5)
                            (om/update-state! owner :current-hr inc)
                            (om/update-state! owner :current-hr dec))))]
        (.setInterval js/window #(change-hr) 1100)))
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:className "current-hr"} "Current HR: " (:current-hr state) "bpm"))))

(defn show-hr [hr hr-type]
  (str hr-type " HR: " hr "bpm"))

(defn hr-view [hr-data owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:className "hr-view"}
        (dom/h2 nil "HR View")
        (dom/div #js {:className "resting-hr"} (show-hr (:rest-hr hr-data) "Resting"))
        (dom/div #js {:className "max-hr"} (show-hr (:max-hr hr-data) "Max"))
        (om/build current-hr app)))))

(defn main-view [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
        (dom/h2 nil "Main view")
        (om/build hr-view (:hr-data app))))))

(defn setup-react []
  (om/root main-view app-state
    {:target (. js/document (querySelector "#app"))}))

(setup-react)
(init)
