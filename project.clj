(defproject coinbox "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async "0.3.465"]
                 [org.clojure/clojurescript "1.9.946"]

                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring-cors "0.1.11"]
                 [compojure "1.6.0"]

                 [rum "0.10.8"]
                 [datascript "0.16.2"]
                 [cljs-http "0.1.44"]]

  :plugins [[lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.5"]]

  :source-paths ["src/clj"]
  :main coinbox.core

  :cljsbuild {:builds
              [{:id           "dev"
                :source-paths ["src/cljs"]
                :figwheel     {:on-jsload "coinbox.core/render"}
                :compiler     {:main                 coinbox.core
                               :asset-path           "js/compiled/out"
                               :output-to            "resources/public/js/compiled/coinbox.js"
                               :output-dir           "resources/public/js/compiled/out"
                               :source-map-timestamp true}}
               {:id           "min"
                :source-paths ["src/cljs"]
                :compiler     {:output-to     "resources/public/js/compiled/coinbox.js"
                               :main          coinbox.core
                               :optimizations :advanced
                               :pretty-print  false}}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.2"]
                                  [figwheel-sidecar "0.5.10"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                     :target-path]}})

