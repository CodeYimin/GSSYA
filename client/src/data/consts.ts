export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
export const MENTAL_HEALTH_ASSESSMENT_QUESTIONS = [
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
