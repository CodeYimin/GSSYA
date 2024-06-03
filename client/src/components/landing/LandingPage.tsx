import { Media } from "@/app/media";
import { LandingPageProps } from "@/types/LandingPage";
import { ReactElement } from "react";
import NextImage from "../NextImage";
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
      <div className="flex justify-center h-[30rem] md:h-[80vh] md:min-h-[35rem] overflow-hidden">
        <Media greaterThan="lg" className="flex-grow">
          <FilmTape
            titles={titles.slice(0, Math.floor(titles.length / 2))}
            images={images.slice(0, Math.floor(images.length / 3))}
            direction="down"
            timePerImage={10}
            className="-rotate-[7deg] h-[90vh] ml-auto mr-[30%]"
          />
        </Media>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-28 md:w-36 aspect-[0.8]">
            <NextImage
              src="/images/logo.svg"
              alt="Logo"
              className=""
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col md:gap-1 items-center font-bold mt-1 md:mt-3">
            <p className="text-red-100 text-3xl md:text-4xl lg:text-5xl">
              GLOBAL SHARE
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl text-red-50">
              SUPPORT YOUTH
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl text-red-100">
              ASSOCIATION
            </p>
          </div>
          <div className="flex gap-8 text-sm md:text-md mt-4 md:mt-8">
            <a
              href="#schedule"
              className="text-red-50 rounded-md bg-red-500 p-3 w-32 hover:bg-red-600"
            >
              Schedule
            </a>
            <a
              href="#programs"
              className="text-red-50 rounded-md bg-red-500 p-3 w-32  hover:bg-red-600"
            >
              Programs
            </a>
          </div>
        </div>
        <Media greaterThan="lg" className="flex-grow">
          <FilmTape
            titles={titles.slice(Math.floor(titles.length / 2), titles.length)}
            images={images.slice(
              Math.floor(images.length / 3),
              Math.floor(images.length / 3) * 2
            )}
            direction="down"
            timePerImage={10}
            className="rotate-[7deg] h-[90vh] ml-[30%] mr-auto"
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
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="relative -ml-[10%] w-[120%] h-[100%] -mt-[10%]">
          <NextImage
            src="/images/programs/exchange/7.jpg"
            alt="Background image"
            className="blur-sm brightness-[.2]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-red-900 bg-opacity-10" />
        </div>
      </div>
    </div>
  );
}
