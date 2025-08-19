(ns hurdle.main
  (:require [clj-http.client :as client]
            [cheshire.core :as json]
            [wkok.openai-clojure.api :as api]))

(defn gemini-request []
  (try
    (client/post
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"
      {:headers      {"X-goog-api-key" (System/getenv "GEMINI_API_KEY")}
       :content-type :json
       :accept       :json
       :body         (json/generate-string {:contents
                                      [{:parts [{:text
                                      "Give me a 5 letter word and 3 hints about that word.
                                      They need to be random from the english language, so a wide variety of words.
                                      The hints can be short phrases or single words.
                                      Return compact JSON, no extra whitespace or control characters"}]}]
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
                                        :propertyOrdering ["word" "wordHints"]}}})})
    (catch Exception e
      (prn e))))

(defn maybe-retry-call [response]
  (if (> 3 (count (:wordHints response)))
    (gemini-request)))

(defn ->json-clj [response]
  (json/parse-string
    (get-in
      (json/parse-string (:body response) true) [:candidates 0 :content :parts 0 :text])
    true))

(defn -main
  [& args]
  (prn ))




(defn gpt-request []
  (try
    (api/create-completion {:model "gpt-5"
                            :prompt "Give me a 5 letter word and 3 hints about that word.
                                      They need to be random from the english language, so a wide variety of words."
                            :temperature 0})
    (catch Exception e
      (prn e))))