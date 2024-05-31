import { IPolaroid } from "@/types/ProgramsPage";
import { coveredByYourGrace } from "@/ui/fonts";
import { ReactElement } from "react";
import NextImage from "../NextImage";

interface PolaroidProps {
  data: IPolaroid;
}

export default function Polaroid({ data }: PolaroidProps): ReactElement {
  return (
    <div className="w-full h-full p-4 gap-4 border-zinc-800 border-2 flex flex-col bg-white">
      <div className="flex-grow w-full h-full relative border border-zinc-800">
        <NextImage src={data.image} alt="Polaroid Image" />
        <div className="absolute top-0 left-0 shadow-[inset_0_5px_10px_0px_theme('colors.zinc.600')] h-full w-full"></div>
      </div>
      <div className="">
        <p className={`${coveredByYourGrace.className} text-xl text-center`}>
          {data.text}
        </p>
      </div>
    </div>
  );
}
