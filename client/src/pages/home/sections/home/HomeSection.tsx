import { WebsiteDataHomeSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Stat from "./components/Stat";

function HomeSection({
  title,
  subtitle,
}: WebsiteDataHomeSection): ReactElement {
  return (
    <div id="home" className="">
      <div className="flex flex-col justify-center h-90v mx-auto w-11/12 md:w-6/12">
        <Title className="text-4xl md:text-6xl font-extrabold text-center text-red-600 tracking-wide">
          {title}
        </Title>
        <p className="text-xl text-red-600 mx-auto text-center mt-4">
          {subtitle}
        </p>
        <a
          href="#about"
          className="w-max mx-auto border-2 border-red-500 mt-6 rounded-full px-10 py-1 hover:bg-red-100 transition"
        >
          <i className="bi bi-arrow-down text-red-500 text-center text-xl" />
        </a>
        {/* <StatsContainer>
          <Stat title="Students" value="395" />
        </StatsContainer> */}
      </div>
    </div>
  );
}

const Title = styled.div`
  /* margin-top: 25vh; */
`

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3em;
`;

export default HomeSection;
