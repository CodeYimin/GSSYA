import { ProgramsPageProps } from "@/types/ProgramsPage";
import { ReactElement } from "react";
import ProgramCard from "./ProgramCard";

export default function ProgramsPage({
  programs,
}: ProgramsPageProps): ReactElement {
  return (
    <div id="programs" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl flex flex-col md:gap-3">
        <p>
          SO WE BUILT A <span className="text-red-500">COMMUNITY</span>
        </p>
        {/* <p>
          WITH <span className="text-red-500">PROGRAMS</span>
        </p> */}
        <p>
          TO SUPPORT <span className="text-red-500">YOUTH</span>
        </p>
        <p>
          FOR <span className="text-red-500">FREE</span>
        </p>
      </div>
      <div className="flex flex-col gap-24 mt-14 items-center">
        {programs.map((program, i) => (
          <ProgramCard
            key={program.title}
            program={program}
            textPosition={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
