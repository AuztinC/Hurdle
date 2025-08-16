(ns hurdle.core
  (:require [clj-http.client :as client]
            [cheshire.core :as cheshire]
            [clojure.data.json :as json]
            [environ.core :refer [env]]))

(defn request []
  (try
    (client/post
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
      {:headers      {"X-goog-api-key" ""}
       :content-type :json
       :accept       :json
       :body         (json/write-str {:contents
                                      [{:parts [{:text "Give me a 5 letter word and 3 hints about that word."}]}]
                                      :generationConfig
                                      {:responseMimeType "application/json"
                                       :responseSchema
                                       {:type             "OBJECT"
                                        :properties
                                        {:word      {:type "STRING"}
                                         :wordHints {:type     "ARRAY"
                                                     :items    {:type "STRING"}
                                                     :minItems 3
                                                     :maxItems 3}}
                                        :propertyOrdering ["word" "wordHints"]}}
                                      })})
    (catch Exception e
      (prn e))))
(def gemini-key
  (env :GEMINI_API_KEY))
(defn -main
  [& args]
  (prn gemini-key))
