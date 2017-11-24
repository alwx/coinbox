(ns figwheel.connect.build-dev (:require [figwheel.client] [coinbox.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/coinbox.core.render (apply js/coinbox.core.render x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'coinbox.core/render' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

