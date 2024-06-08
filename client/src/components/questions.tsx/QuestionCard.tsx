import { IQuestionCard } from "@/types/Questions";
import { ReactElement, useState } from "react";

interface QuestionCardProps {
  question: IQuestionCard;
}

const caretDownPath =
  "M17.7604 4.33044C17.4409 4.01097 16.9228 4.01091 16.6033 4.33049L9.00022 11.9337L1.39675 4.33044C1.07728 4.01097 0.559203 4.01091 0.239676 4.33049C-0.0798513 4.65002 -0.0798513 5.16804 0.239676 5.48757L8.42171 13.6694C8.57515 13.8228 8.78324 13.909 9.00022 13.909C9.2172 13.909 9.42535 13.8228 9.57873 13.6693L17.7603 5.48751C18.0799 5.16804 18.0799 4.64997 17.7604 4.33044Z";

export default function QuestionCard({
  question,
}: QuestionCardProps): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-md bg-zinc-100 p-5 w-full">
      <div
        className="flex gap-5 cursor-pointer hover:bg-zinc-100 items-center rounded-md w-full justify-between"
        onClick={() => setOpen(!open)}
      >
        <div className="text-zinc-950 text-md md:text-lg">
          {question.question}
        </div>
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className={`fill-zinc-600 ${open ? "transform rotate-180" : ""}`}
          >
            <path d={caretDownPath} />
          </svg>
        </div>
      </div>
      <div className="flex flex-col">
        <div className={`text-sm ${open ? "h-full" : "h-0"} overflow-hidden`}>
          <div className="pt-5">{question.answer}</div>
        </div>
      </div>
    </div>
  );
}
