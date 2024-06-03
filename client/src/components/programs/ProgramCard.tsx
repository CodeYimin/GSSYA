import { IProgramCard } from "@/types/ProgramsPage";
import { ReactElement } from "react";
import Polaroid from "./Polaroid";

interface ProgramCardProps {
  program: IProgramCard;
  textPosition: "left" | "right";
}

export default function ProgramCard({
  program,
  textPosition,
}: ProgramCardProps): ReactElement {
  return (
    <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-8 text-zinc-950">
      <div
        className={`mx-8 max-w-96 text-center md:text-left md:float-right md:mx-[5vw] md:w-[25vw] md:my-auto ${
          textPosition === "right" && "md:order-last"
        }`}
      >
        <p className="font-medium text-xs">{program.subheading1}</p>
        <p className="font-bold text-3xl md:text-4xl">{program.title}</p>
        {program.subheading2 && (
          <p className="text-xs">a.k.a. {program.subheading2}</p>
        )}
        <p className="mt-3 text-sm font-medium text-zinc-800">
          {program.description}
        </p>
        <div className="flex gap-x-3 max-w-96 flex-wrap justify-center md:justify-start">
          {program.buttons.map((button, i) => (
            <a
              key={i}
              href={button.link}
              target="_blank"
              className="inline-block text-zinc-50 rounded-md bg-zinc-800 py-2 px-5 text-sm hover:bg-zinc-950 mt-3 whitespace-nowrap"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
      <div className="m-auto relative max-w-[50%] w-60 aspect-[12/15] md:max-w-none md:w-60 md:h-72">
        <div className="absolute rotate-[20deg] scale-[75%] translate-x-20 w-full h-full">
          <Polaroid data={program.polaroids[0]} />
        </div>
        <div className="absolute -rotate-[20deg] scale-[75%] -translate-x-20 w-full h-full">
          <Polaroid data={program.polaroids[1]} />
        </div>
        <div className="absolute w-full h-full">
          <Polaroid data={program.polaroids[2]} />
        </div>
      </div>
    </div>
  );
}
