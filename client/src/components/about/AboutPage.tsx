import { AboutPageProps } from "@/types/AboutPage";
import { ReactElement } from "react";
import YouTubePlayer from "react-player/youtube";

export default function AboutPage({
  title1,
  title2,
  description,
}: AboutPageProps): ReactElement {
  return (
    <div id="about" className="pt-16">
      <div className="font-bold text-center text-3xl md:text-4xl">
        {title1}
        <span className="text-red-500">{title2}</span>
      </div>
      <div className="text-center text-sm md:text-base lg:text-left flex flex-col-reverse lg:grid lg:grid-cols-2 items-center py-10 px-10 md:px-16 gap-8">
        <div className="mt-5 lg:mt-0 whitespace-pre-line">{description}</div>
        <div className="w-full">
          <YouTubePlayer
            url={"https://www.youtube.com/watch?v=0Ob7CQM3GDY"}
            // https://www.youtube.com/watch?v=pZBVAPvEVrc
            width="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}
