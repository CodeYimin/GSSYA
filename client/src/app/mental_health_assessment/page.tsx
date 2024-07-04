"use client";

import { API_URL } from "@/data/consts";
import { ReactElement, useState } from "react";

const questions = [
  {
    question: "How interested are you in doing your hobbies?",
    answers: [
      "Not at all interested",
      "Slightly interested",
      "Moderately interested",
      "Very interested",
      "Extremely interested",
    ],
  },
  {
    question: "How optimistic are you that you will feel better?",
    answers: [
      "Not at all optimistic",
      "Slightly optimistic",
      "Moderately optimistic",
      "Very optimistic",
      "Extremely optimistic",
    ],
  },
  {
    question: "Have you experienced any significant loss or gain of appetite?",
    answers: [
      "Extreme loss or gain of appetite",
      "High loss or gain of appetite",
      "Moderate loss or gain of appetite",
      "Slight loss or gain of appetite",
      "No loss or gain of appetite",
    ],
  },
  {
    question:
      "Have you experienced any significant changes in the amount of sleep you are getting (increase/decrease)?",
    answers: [
      "Extreme increase or decrease of sleep",
      "High increase or decrease of sleep",
      "Moderate increase or decrease of sleep",
      "Slight increase or decrease of sleep",
      "No increase or decrease of sleep",
    ],
  },
  {
    question: "How motivated are you in day-to-day life?",
    answers: [
      "No motivation at all",
      "Slight motivation",
      "Moderate motivation",
      "High motivation",
      "Very high motivation",
    ],
  },
  {
    question: "How connected do you feel with your community?",
    answers: [
      "Not at all connected",
      "Slightly connected",
      "Moderately connected",
      "Very connected",
      "Extremely connected",
    ],
  },
  {
    question: "How content are you with where you are in life?",
    answers: [
      "Not at all content",
      "Slightly content",
      "Moderately content",
      "Very content",
      "Extremely content",
    ],
  },
  {
    question: "How irritable do you feel on a day-to-day basis?",
    answers: [
      "Extremely irritable",
      "Very irritable",
      "Moderately irritable",
      "Slightly irritable",
      "Not at all irritable",
    ],
  },
  {
    question: "How often do you feel prolonged numbness?",
    answers: ["Very often", "Often", "Sometimes", "Rarely", "Never"],
  },
  {
    question: "How often do you feel prolonged sadness?",
    answers: ["Very often", "Often", "Sometimes", "Rarely", "Never"],
  },
  {
    question: "How often do you spend time with family?",
    answers: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  },
  {
    question: "How often do you contact your family and friends?",
    answers: ["Never", "Rarely", "Sometimes", "Often", "Very often"],
  },
  {
    question: "Do you feel comfortable making friends?",
    answers: [
      "Not at all comfortable",
      "Slightly comfortable",
      "Moderately comfortable",
      "Very comfortable",
      "Extremely comfortable",
    ],
  },
  {
    question: "How often do you feel sad?",
    answers: ["Very often", "Often", "Sometimes", "Rarely", "Never"],
  },
  {
    question: "Have you experienced any suicidal or self-harm ideations?",
    answers: ["Very often", "Often", "Sometimes", "Rarely", "Never"],
  },
];

async function getQuestionResponse(
  question: string,
  answer: string,
  score: string
) {
  const response = await fetch(
    `${API_URL}/mental-health-signup/questionResponse?question=${question}&answer=${answer}&score=${score}`
  );
  return await response.text();
}

async function getCompleteResponse(
  score: number,
  maxScore: number,
  emergency: boolean
) {
  const response = await fetch(
    `${API_URL}/mental-health-signup/completeResponse?score=${score}&scoreMax=${maxScore}&emergency=${emergency}`
  );
  return await response.text();
}

interface PageProps {}

export default function Page({}: PageProps): ReactElement {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
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
        {loadingCompleteResponse ? (
          <div className="mt-5 text-zinc-800">Completing form...</div>
        ) : completeResponse ? (
          <div className="mt-5 text-zinc-800 whitespace-pre-line">
            {completeResponse}
          </div>
        ) : (
          <>
            <div className="text-sm mt-5 text-zinc-600">
              Question {questionIndex + 1}/{questions.length}
            </div>
            <div className="text-lg mx-auto w-[30rem] max-w-[80%]">
              {questions[questionIndex].question}
            </div>
            <div className="flex flex-col gap-5 my-5 w-64 mx-auto">
              {questions[questionIndex].answers.map((answer, score) => (
                <button
                  key={score}
                  className={`bg-zinc-500 text-white text-sm py-2 px-4 rounded-md  ${
                    loadingResponse || response
                      ? "select-none hover:cursor-not-allowed bg-zinc-200"
                      : "hover:bg-zinc-600"
                  } ${score === scores[questionIndex] ? "bg-zinc-600" : ""}
                `}
                  onClick={async () => {
                    setLoadingResponse(true);
                    setResponse(
                      await getQuestionResponse(
                        questions[questionIndex].question,
                        answer,
                        `${score + 1}/5`
                      )
                    );
                    setLoadingResponse(false);
                    setScores([...scores, score]);
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
            {!loadingResponse && response && (
              <div>
                <div className="">{response}</div>
                <button
                  className="mt-5 bg-zinc-500 text-white text-sm py-2 px-4 rounded-md hover:bg-zinc-600"
                  onClick={async () => {
                    if (questionIndex === questions.length - 1) {
                      setLoadingCompleteResponse(true);
                      setCompleteResponse(
                        await getCompleteResponse(
                          scores.reduce((a, b) => a + b, 0),
                          scores.length * 4,
                          scores[14] !== 4
                        )
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
