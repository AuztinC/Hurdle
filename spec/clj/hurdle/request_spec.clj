(ns hurdle.request-spec
  (:require [speclj.core :refer :all]
            [hurdle.request :as sut]))

(def raw-response
  {:cached                nil,
   :request-time          1152,
   :repeatable?           false,
   :protocol-version      {:name "HTTP", :major 1, :minor 1},
   :streaming?            true,
   :chunked?              true,
   :reason-phrase         "OK",
   :headers               {"Server" "scaffolding on HTTPServer2", "Content-Type" "application/json; charset=UTF-8", "X-Content-Type-Options" "nosniff", "Alt-Svc" "h3=\":443\"; ma=2592000,h3-29=\":443\"; ma=2592000", "X-Frame-Options" "SAMEORIGIN", "Connection" "close", "Transfer-Encoding" "chunked", "Date" "Mon, 18 Aug 2025 15:25:25 GMT", "Vary" ["Origin" "X-Origin" "Referer"], "Server-Timing" "gfet4t7; dur=1013", "X-XSS-Protection" "0"},
   :orig-content-encoding "gzip",
   :status                200,
   :length                -1,
   :body                  "{\n
   \"candidates\": [\n
   {\n
   \"content\": {\n
   \"parts\": [\n
   {\n
   \"text\": \"{\\n
   \\\"word\\\": \\\"PIZZA\\\",\\n
   \\\"wordHints\\\": [\\n
   \\\"Often served in slices\\\",\\n
   \\\"Popular at parties\\\",\\n
   \\\"Can be topped with pepperoni\\\"\\n
   ]\\n
   }\"\n
   }\n
   ],\n
   \"role\": \"model\"\n
   },\n
   \"finishReason\": \"STOP\",\n
   \"avgLogprobs\": -0.16263221657794455\n
   }\n
   ],\n
   \"usageMetadata\": {\n
   \"promptTokenCount\": 27,\n
   \"candidatesTokenCount\": 46,\n
   \"totalTokenCount\": 73,\n
   \"promptTokensDetails\": [\n
   {\n
   \"modality\": \"TEXT\",\n
   \"tokenCount\": 27\n
   }\n
   ],\n
   \"candidatesTokensDetails\": [\n
   {\n
   \"modality\": \"TEXT\",\n
   \"tokenCount\": 46\n
   }\n
   ]\n
   },\n
   \"modelVersion\": \"gemini-2.0-flash\",\n
   \"responseId\": \"iE2jaIC9Mp7oz7IP6I-hiQk\"\n
   }\n
   ",
   :trace-redirects       []}
  )

(def conformed-response
  {:word "PIZZA"
   :wordHints
   ["Often served in slices"
    "Popular at parties"
    "Can be topped with pepperoni"]})

(describe "LLM Requests"
  (with-stubs)

  (context "bad response"
    (redefs-around [sut/gemini-request (stub :gemini-request
                                         {:return {:word "WORDS" :wordHints ["1" "2"]}})])
    (it "re-calls gemini for less than 3 hints"
      (let [bad-response (sut/gemini-request)]
        (sut/maybe-retry-call bad-response)
        (should-have-invoked :gemini-request {:times 2}))))

  (context "good response"
    (redefs-around [sut/gemini-request (stub :gemini-request
                                         {:return {:word "WORDS" :wordHints ["1" "2" "3"]}})])

    (it "contains word and hints from response"
      (should-contain "word" (:body raw-response))
      (should-contain "wordHints" (:body raw-response)))

    (it "clojure conforms response"
      (should= conformed-response (sut/->json-clj raw-response)))

    (it "can find single word"
      (should-contain :word (sut/->json-clj raw-response)))

    (it "maybe-retry-call does not re-call gemini"
      (let [good-response (sut/gemini-request)]
        (sut/maybe-retry-call good-response)
        (should-have-invoked :gemini-request {:times 1})
        (should-not-have-invoked :gemini-request {:times 2})))

    (it "maybe-retry-call returns good response"
      (let [good-response (sut/gemini-request)
            out (sut/maybe-retry-call good-response)]
        (should= ["1" "2" "3"] (:wordHints out)))))

  )
