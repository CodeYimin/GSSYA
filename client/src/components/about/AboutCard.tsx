import { IAboutCard } from "@/types/AboutPage";
import { ReactElement } from "react";
import NextImage from "../NextImage";

interface AboutCardProps {
  card: IAboutCard;
}

export default function AboutCard({ card }: AboutCardProps): ReactElement {
  return (
    <div className="w-52 h-[16rem] md:h-[20rem] md:w-60 brightness-[98%] bg-zinc-100 rounded-lg flex flex-col items-center p-10 gap-8">
      <div className="aspect-square h-full object-cover relative">
        <NextImage src={card.image} alt="About Card Image" />
      </div>
      <div className="text-xs md:text-sm font-semibold text-center">
        {card.text}
      </div>
    </div>
  );
}
