import { WebsiteDataSubjectsSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import SubjectCard from "../components/SubjectCard";

function SubjectsSection({
  title,
  subjects,
}: WebsiteDataSubjectsSection): ReactElement {
  const [classesExpanded, setClassesExpanded] = useState<boolean>(false);
  const cardsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [...cardsContainer.current!.children];
    cardsContainer.current!.style.height = classesExpanded
      ? `${cardsContainer.current?.scrollHeight}px`
      : `${cards[0]?.clientHeight}px`;
  }, [subjects, cardsContainer.current, classesExpanded]);

  return (
    <div id="classes" className="text-white fill-current">
      <div className="relative h-20">
        <svg
          className="h-20 bg-blue-500 absolute"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 500 20"
        >
          <path
            className="text-blue-600 fill-current"
            d="M0,0 C250,30 300,-20 500,12 L500,150 L0,150 Z"
          />
        </svg>
        <svg
          className="h-20 absolute z-10"
          width="100%"
          preserveAspectRatio="none"
          viewBox="0 0 500 20"
        >
          <path
            className="text-blue-900 fill-current"
            d="M0,12 C250,-20 300,30 500,0 L500,150 L0,150 Z"
          />
        </svg>
      </div>
      <div className="bg-blue-900 pb-12">
        <h1 className="section-header">{title}</h1>
        <div
          ref={cardsContainer}
          className="flex flex-wrap justify-evenly overflow-hidden transition-all duration-500"
        >
          {subjects?.map((subject) => (
            <SubjectCard key={subject.title} {...subject} />
          ))}
        </div>
        <div className="w-max mx-auto text-center mt-5 leading-3">
          <p>{classesExpanded ? "Less" : "More"}</p>
          <i
            onClick={() => setClassesExpanded(!classesExpanded)}
            className={`bi bi-chevron-${
              classesExpanded ? "up" : "down"
            } text-6xl hover:cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
}

export default SubjectsSection;
