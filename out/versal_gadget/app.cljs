(ns versal-gadget.app
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)
(def player (js/VersalPlayerAPI.))

(.log js/console "hello")
