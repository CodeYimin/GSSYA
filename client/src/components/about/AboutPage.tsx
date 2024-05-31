import { AboutPageProps } from "@/types/AboutPage";
import { ReactElement } from "react";
import InfiniteSlider from "../landing/InfiniteSlider";
import AboutCard from "./AboutCard";

export default function AboutPage({ cards }: AboutPageProps): ReactElement {
  return (
    <div id="about" className="pt-20">
      <div className="font-bold text-center text-3xl md:text-4xl">
        TODAY{"'"}S YOUTH ARE <span className="text-red-500">STRUGGLING</span>
      </div>
      <div className="">
        <InfiniteSlider time={50} direction="right" className="pt-16 md:pt-20">
          <div className="flex items-center">
            {cards.map((card, i) => (
              <div key={i} className="mx-6 md:mx-12">
                <AboutCard card={card} />
              </div>
            ))}
          </div>
        </InfiniteSlider>
      </div>
    </div>
  );
}
