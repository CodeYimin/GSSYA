import { QuestionsPageProps } from "@/types/Questions";
import { ReactElement } from "react";
import QuestionCard from "./QuestionCard";

export default function QuestionsPage({
  title1,
  title2,
  questions,
}: QuestionsPageProps): ReactElement {
  return (
    <div id="faq" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
        <p>
          {title1}
          <span className="text-red-500">{title2}</span>
        </p>
      </div>
      <div className="mt-16 flex flex-col items-center gap-5 w-[80%] mx-auto">
        {questions.map((question) => (
          <QuestionCard question={question} key={question.question} />
        ))}
      </div>
    </div>
  );
}
