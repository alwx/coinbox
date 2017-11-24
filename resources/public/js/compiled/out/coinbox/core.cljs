(ns coinbox.core
  (:require [rum.core :as rum]
            [coinbox.api :as api]))

(defonce *state
  (atom {:count   0
         :message "Hello, world!"}))

(rum/defc root [text]
  [:div {:class "label"} text])

(defn ^:export render []
  (api/installation)
  (rum/mount (root "kek") (js/document.querySelector "#app")))

(render)
