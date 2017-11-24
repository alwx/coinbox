(ns coinbox.core
  (:require [compojure.core :as compojure]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.cors :as cors])
  (:gen-class))

(compojure/defroutes main-routes
  (route/resources "/")
  (route/not-found "Page not found"))

(def handler
  (cors/wrap-cors main-routes
                  :access-control-allow-origin [#"https://sandbox.public.api.bunq.com"]
                  :access-control-allow-methods [:get :put :post :delete]))

(defn -main [& args]
  (println "Starting server at port 3000")
  (jetty/run-jetty handler {:port 3000}))
