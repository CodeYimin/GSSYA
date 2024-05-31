"use client";

import styled from "@emotion/styled";
import clsx from "clsx";
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  PropsWithoutRef,
  ReactElement,
} from "react";

interface InfiniteSliderProps {
  time: number;
  direction: "up" | "down" | "left" | "right";
}

export default function InfiniteSlider({
  time,
  direction,
  children,
  ...props
}: InfiniteSliderProps & ComponentProps<"div">): ReactElement {
  return (
    <Container {...{ direction }} {...props}>
      <Slider {...{ time, direction }}>{children}</Slider>
      <Slider {...{ time, direction }}>{children}</Slider>
    </Container>
  );
}

const Container = styled.div<{ direction: "up" | "down" | "left" | "right" }>`
  display: flex;
  overflow: hidden;
  ${({ direction }) =>
    clsx({
      "flex-direction: row;": direction === "right" || direction === "left",
      "flex-direction: column;": direction === "up" || direction === "down",
    })}
  ${({ direction }) =>
    clsx({
      "height: max-content;": direction === "right" || direction === "left",
      "width: max-content;": direction === "up" || direction === "down",
    })}
`;

const Slider = styled.div<{
  time: number;
  direction: "up" | "down" | "left" | "right";
}>`
  animation: slide-${({ direction }) => direction} infinite ${({ time }) =>
      time}s linear;

  @keyframes slide-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-up {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;
