import { WebsiteDataQuestionsSectionQuestion } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";

function QuestionCard({
  question,
  answer,
}: WebsiteDataQuestionsSectionQuestion): ReactElement {
  const answerElement = useRef<HTMLDivElement>(null);
  const [answerExpanded, setAnswerExpanded] = useState<boolean>(false);
  const [originalAnswerHeight, setOriginalAnswerHeight] = useState<string>("");

  useEffect(() => {
    setOriginalAnswerHeight(`${answerElement.current!.clientHeight}px`);
  }, []);

  useEffect(() => {
    answerElement.current!.style.height = answerExpanded
      ? originalAnswerHeight
      : `0px`;
    answerElement.current!.style.borderWidth = answerExpanded ? "1px" : "0px";
  }, [answerExpanded]);

  return (
    <div className="text-center py-2 text-l md:text-lg font-normal">
      <div
        className="transition-all md:hover:text-xl bg-white text-indigo-900 p-5 rounded-lg cursor-pointer"
        onClick={() => setAnswerExpanded((current) => !current)}
      >
        {question}
      </div>
      <div
        ref={answerElement}
        className={
          "relative transition-all w-11/12 mx-auto rounded-b-lg overflow-hidden border-white"
        }
      >
        <p className="p-5">{answer}</p>
      </div>
    </div>
  );
}

export default QuestionCard;
