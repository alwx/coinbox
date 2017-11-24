(ns coinbox.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def url "https://sandbox.public.api.bunq.com/v1")
(def public-key "AAAAB3NzaC1yc2EAAAADAQABAAACAQCzhuwBJ34ZvhXX/aDn3X2pitA6DdLQw8WcxbytmBhoksnn9NaUf63DZtxk5DZVinINkmzeULrQJLRef/7qSIARhX5SvSkfkut5OF7WvpUtnke2pev0YZNjgh/cFuUYGFgs9C4HwVv4poJeYiBuUMsCNGJe8b0SK4eMndxLeTe3hr/OGgSxG4NHgckqiHxtly8paBd/ZwQaruQPrvYuGSdq84NWSUvFl5jgj3VHUAIr6KD5cLDiQxQNNlgwhzgQS6+giJNLLCRJZZiIycW3kn3r2RCmGA/sGgsmU/oKJY98ssT4jqR7FEjnuO3E3PRVbV95vRjza+WDQyu+NnyQJ5qT0EfSwdcO7SPJUdQiyjwQA6cFjIr9bxMg+EVwzqBsjkMJH7kdrF1eqb6naNHA8CjqI4tQPzdqwsAqwibTnQs4GUyZVndWdjAHzDMmmJQpuoJdEiypcX4qL4w6UWOoYaT2CoRfTy3gpjCmBXjUp4KM06NgS0QpDyp9X0w4iVf3J09LzngwQq6Gpx0ogPWW/6ETgP6dL8SFzwJwGjrR8MdOAKGeyzVCACBd54jBfHrtJXsvg5s63CH4phGa2zzntBEaqZG6D4b3Hyva0VMw95eIERz2mOX2lteftvBoAnoZ5hMu32ThJKPEW3i5CUrpxgnjTXooOHQtYe+g4AUG/3CQxw== alwxndr@gmail.com\n")


(defn installation []
  (go (let [response (<! (http/post (str url "/installation")
                                    {:form-params {"client_public_key" public-key}}))]
        (prn response))))