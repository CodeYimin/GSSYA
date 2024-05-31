import { Media } from "@/app/media";
import { LandingPageProps } from "@/types/LandingPage";
import { ReactElement } from "react";
import FilmTape from "./FilmTape";

export default function LandingPage({
  images,
  titles,
}: LandingPageProps): ReactElement {
  return (
    <div id="home" className="w-full mt-12 relative text-center">
      {/* <Media lessThan="lg">
        <div className="h-10" />
        <div className="relative">
          <FilmTape
            images={[]}
            titles={titles}
            direction="right"
            timePerImage={10}
            thickness="12rem"
            className=" w-[120%] absolute top-0"
          />
          <FilmTape
            images={[]}
            titles={titles}
            direction="left"
            timePerImage={10}
            thickness="12rem"
            className="-ml-5 w-[120%] absolute top-5"
          />
        </div>
      </Media> */}
      <div className="flex justify-center h-[30rem] md:h-[80vh] overflow-hidden">
        <Media greaterThan="md" className="flex-grow">
          <FilmTape
            titles={titles.slice(0, Math.floor(titles.length / 2))}
            images={images.slice(0, Math.floor(images.length / 3))}
            direction="down"
            timePerImage={10}
            className="-rotate-[5deg] h-[90vh] m-auto"
          />
        </Media>
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col gap-2 md:gap-4 items-center font-bold">
            <p className="text-red-300 text-3xl md:text-5xl">
              THE <span className="text-5xl md:text-7xl text-red-500">#1</span>
            </p>
            <p className="text-4xl md:text-6xl text-red-500">YOUTH SUPPORT</p>
            <p className="text-4xl md:text-6xl text-red-300">COMMUNITY</p>
          </div>
          <div className="flex gap-8 text-sm md:text-md">
            <a
              href="#programs"
              className="text-red-50 rounded-md bg-red-500 p-3 w-32  hover:bg-red-600"
            >
              Programs
            </a>
            <a
              href="#schedule"
              className="text-red-50 rounded-md bg-red-500 p-3 w-32 hover:bg-red-600"
            >
              Schedule
            </a>
          </div>
        </div>
        <Media greaterThan="md" className="flex-grow">
          <FilmTape
            titles={titles.slice(Math.floor(titles.length / 2), titles.length)}
            images={images.slice(
              Math.floor(images.length / 3),
              Math.floor(images.length / 3) * 2
            )}
            direction="down"
            timePerImage={10}
            className="rotate-[5deg] h-[90vh] m-auto"
          />
        </Media>
      </div>
      <Media greaterThan="md">
        <FilmTape
          titles={[]}
          images={images.slice(
            Math.floor(images.length / 3) * 2,
            images.length
          )}
          direction="right"
          timePerImage={10}
          className="w-full"
          thickness="18rem"
        />
      </Media>
      <Media lessThan="lg">
        <FilmTape
          titles={[]}
          holeSize="0.5rem"
          images={images.slice(0, 5)}
          direction="right"
          timePerImage={10}
          className="w-full"
          thickness="12rem"
        />
      </Media>
    </div>
  );
}
