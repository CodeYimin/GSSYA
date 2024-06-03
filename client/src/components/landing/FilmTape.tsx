"use client";

import styled from "@emotion/styled";
import { ComponentProps, Fragment, ReactElement } from "react";
import colors from "tailwindcss/colors";
import NextImage from "../NextImage";
import InfiniteSlider from "./InfiniteSlider";

interface FilmTapeProps {
  images: string[];
  titles: string[];
  direction: "up" | "down" | "left" | "right";
  timePerImage: number;
  thickness?: string;
  holeSize?: string;
}

export default function FilmTape({
  images,
  titles,
  timePerImage,
  direction,
  thickness,
  holeSize,
  ...props
}: FilmTapeProps & ComponentProps<"div">): ReactElement {
  const vertical = direction === "up" || direction === "down";

  return (
    <InfiniteSlider
      time={(images.length || titles.length) * timePerImage}
      direction={direction}
      className={vertical ? "h-screen" : "w-full"}
      {...props}
    >
      {vertical ? (
        <FilmStripVertical
          size={holeSize || "0.6rem"}
          colorFg={colors.zinc[950]}
          colorBg={colors.zinc[200]}
          // colorBg="#ffefef70"
          thickness={thickness}
          className=""
        >
          {images.map((image, i) => (
            <Fragment key={i}>
              <div className="w-[75%] aspect-[1/1.5] m-4 relative">
                <NextImage src={image} key={i} alt="Image" />
                <div className="absolute top-0 left-0 shadow-[inset_0_0_10px_0_theme('colors.zinc.600')] h-full w-full" />
              </div>
              {titles?.length && (
                <div className="text-zinc-200 text-xl font-semibold my-3 w-[75%] text-center">
                  {titles[i % titles.length]}
                </div>
              )}
            </Fragment>
          ))}
        </FilmStripVertical>
      ) : images.length ? (
        <FilmStripHorizontal
          size={holeSize || "0.6rem"}
          colorFg={colors.zinc[950]}
          colorBg={colors.zinc[200]}
          // colorBg="#ffefef70"
          thickness={thickness}
          className=""
        >
          {images.map((image, i) => (
            <div className="h-[75%] aspect-[1.5/1] m-4 relative" key={i}>
              <NextImage src={image} key={i} alt="no" />
              <div className="absolute top-0 left-0 shadow-[inset_0_0_10px_0_theme('colors.zinc.600')] h-full w-full" />
            </div>
          ))}
        </FilmStripHorizontal>
      ) : (
        <FilmStripHorizontal
          size={holeSize || "0.4rem"}
          colorFg={colors.red[500] || colors.zinc[950]}
          colorBg={colors.zinc[200]}
          // colorBg="#ffefef70"
          thickness="5rem"
          className=""
        >
          {titles?.map((title, i) => (
            <div
              key={i}
              className="text-zinc-50 text-sm font-semibold mx-5 text-center whitespace-nowrap"
            >
              {title}
            </div>
          ))}
        </FilmStripHorizontal>
      )}
    </InfiniteSlider>
  );
}

// background-image: conic-gradient(
//   at 50% ${(props) => props.size},
//   ${(props) => props.color} 75%,
//   #0000 0
// );
// background-position: 0 0;
// background-size: calc(2 * ${(props) => props.size})
// calc(100% - ${(props) => props.size});

const FilmStripVertical = styled.div<{
  size: string;
  colorFg: string;
  colorBg: string;
  thickness?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.thickness || "18rem"};
  /* width: 20vw; */

  background-image: conic-gradient(
    at ${(props) => props.size} 50%,
    ${(props) => props.colorFg} 75%,
    ${(props) => props.colorBg} 0
  );
  background-position: 0 0;
  background-size: calc(100% - ${(props) => props.size})
    calc(2 * ${(props) => props.size});

  border: ${(props) => props.size} solid ${(props) => props.color};
  border-bottom: 0;
  border-top: 0;

  /* filter: sepia(1) brightness(0.9) grayscale(0.2); */
`;

const FilmStripHorizontal = styled.div<{
  size: string;
  colorFg: string;
  colorBg: string;
  thickness?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(props) => props.thickness || "18rem"};

  background-image: conic-gradient(
    at 50% ${(props) => props.size},
    ${(props) => props.colorFg} 75%,
    ${(props) => props.colorBg} 0
  );
  background-position: 0 0;
  background-size: calc(2 * ${(props) => props.size})
    calc(100% - ${(props) => props.size});

  border: ${(props) => props.size} solid ${(props) => props.colorFg};
  border-left: 0;
  border-right: 0;

  /* filter: sepia(1) brightness(0.9) grayscale(0.2); */
`;
