"use client";

import { API_URL, MENTAL_HEALTH_ASSESSMENT_QUESTIONS } from "@/data/consts";
import clsx from "clsx";
import { ReactElement, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

async function getQuestionResponse(
  question: string,
  answer: string,
  score: string
) {
  const response = await fetch(
    `${API_URL}/mental-health-assessment/questionResponse?question=${question}&answer=${answer}&score=${score}`
  );
  return await response.text();
}

async function getCompleteResponse(
  age: string,
  email: string,
  scores: number[]
) {
  const response = await fetch(
    `${API_URL}/mental-health-assessment/completeResponse?age=${age}&email=${email}&scores=${scores}`
  );
  return await response.text();
}

interface PageProps {}

export default function Page({}: PageProps): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const [response, setResponse] = useState<string | null>(null);
  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const [scores, setScores] = useState<number[]>([]);
  const [loadingCompleteResponse, setLoadingCompleteResponse] =
    useState<boolean>(false);
  const [completeResponse, setCompleteResponse] = useState<string | null>(null);

  return (
    <div className="mt-16 p-5 text-center">
      <div>
        <div className="text-3xl font-bold text-zinc-800">
          Mental Health Assessment
        </div>
        {questionIndex === -1 ? (
          <div className="mt-5 text-zinc-800 flex flex-col gap-5 items-center">
            <input
              className="bg-gray-200 px-5 py-3 rounded-md w-[20rem]"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-gray-200 px-5 py-3 rounded-md w-[20rem]"
              placeholder="Enter age..."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button
              className="bg-zinc-500 text-white text-sm py-2 px-4 rounded-md hover:bg-zinc-600"
              onClick={async () => {
                setQuestionIndex(0);
              }}
            >
              Next
            </button>
          </div>
        ) : loadingCompleteResponse ? (
          <div className="mt-5 text-zinc-800 flex gap-5 justify-center items-center">
            <AiOutlineLoading className="animate-spin" /> Completing form...
          </div>
        ) : completeResponse ? (
          <div className="mt-5 text-zinc-800 whitespace-pre-line">
            {completeResponse}
          </div>
        ) : (
          <>
            <div className="text-sm mt-5 text-zinc-600">
              Question {questionIndex + 1}/
              {MENTAL_HEALTH_ASSESSMENT_QUESTIONS.length}
            </div>
            <div className="text-lg mx-auto w-[30rem] max-w-[80%]">
              {MENTAL_HEALTH_ASSESSMENT_QUESTIONS[questionIndex].question}
            </div>
            <div className="flex flex-col gap-5 my-5 w-64 mx-auto">
              {MENTAL_HEALTH_ASSESSMENT_QUESTIONS[questionIndex].answers.map(
                (answer, score) => (
                  <button
                    key={score}
                    className={clsx(
                      "text-white text-sm py-2 px-4 rounded-md",
                      score === scores[questionIndex]
                        ? "bg-zinc-600"
                        : loadingResponse || response
                        ? "bg-zinc-200"
                        : "bg-zinc-500",
                      loadingResponse || response
                        ? "select-none hover:cursor-not-allowed"
                        : "hover:bg-zinc-600"
                    )}
                    onClick={async () => {
                      if (response !== null || loadingResponse) {
                        return;
                      }

                      setScores([...scores, score]);
                      setLoadingResponse(true);
                      setResponse(
                        await getQuestionResponse(
                          MENTAL_HEALTH_ASSESSMENT_QUESTIONS[questionIndex]
                            .question,
                          answer,
                          `${score + 1}/5`
                        )
                      );
                      setLoadingResponse(false);
                    }}
                  >
                    {answer}
                  </button>
                )
              )}
            </div>
            {loadingResponse && (
              <AiOutlineLoading className="animate-spin h-8 w-8 mt-5 mx-auto" />
            )}
            {!loadingResponse && response && (
              <div>
                <div className="">{response}</div>
                <button
                  className="mt-5 bg-zinc-500 text-white text-sm py-2 px-4 rounded-md hover:bg-zinc-600"
                  onClick={async () => {
                    if (
                      questionIndex ===
                      MENTAL_HEALTH_ASSESSMENT_QUESTIONS.length - 1
                    ) {
                      setLoadingCompleteResponse(true);
                      setCompleteResponse(
                        await getCompleteResponse(age, email, scores)
                      );
                      setLoadingCompleteResponse(false);
                      return;
                    }
                    setResponse(null);
                    setQuestionIndex(questionIndex + 1);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
