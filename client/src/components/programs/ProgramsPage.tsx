import { ProgramsPageProps } from "@/types/ProgramsPage";
import { ReactElement } from "react";
import ProgramCard from "./ProgramCard";

export default function ProgramsPage({
  title1,
  title2,
  akaText,
  programs,
}: ProgramsPageProps): ReactElement {
  return (
    <div id="programs" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
        <p>
          {title1}
          <span className="text-red-500">{title2}</span>
        </p>
      </div>
      <div className="flex flex-col gap-24 mt-14 items-center">
        {programs.map((program, i) => (
          <ProgramCard
            key={program.title}
            program={program}
            akaText={akaText}
            textPosition={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
