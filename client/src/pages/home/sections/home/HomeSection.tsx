import { WebsiteDataHomeSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Stat from "./components/Stat";

function HomeSection({
  title,
  founded,
  subtitle,
  stats,
}: WebsiteDataHomeSection): ReactElement {
  return (
    <Container>
      <TopContainer id="home" className="">
        <TextContainer>
          <Title founded={founded || ""}>{title}</Title>
          {/* <Founded>Founded in 2019</Founded> */}
          <Subtitle>{subtitle}</Subtitle>
          {/* <a
          href="#about"
          className="w-max mx-auto border-2 border-blue-900 mt-6 rounded-full px-10 py-1 hover:bg-blue-100 transition"
        >
          <i className="bi bi-arrow-down text-blue-900 text-center text-xl" />
        </a> */}
        </TextContainer>
        <Image src="images/kids-studying.jpg" />
      </TopContainer>
      <StatsContainer>
        {stats.map((stat) => <Stat title={stat.title || ""} value={stat.value || ""} />)}
      </StatsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 95vh;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 7.5rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 5rem;
  color: #183ea5;
`;

const Title = styled.div<{founded: string}>`
  font-size: 4rem;
  letter-spacing: 0.2rem;
  font-weight: 800;
  line-height: 5rem;

  &::after {
    display: inline-block;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 500;
    content: "${({founded}) => founded}";
    margin-left: 1.5rem;
    letter-spacing: 0;
  }
`;

const Founded = styled.div`
  margin-top: 0.25rem;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
`;

const Subtitle = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 300;
  width: 90%;
`;

const Image = styled.img`
  width: 0;
  object-fit: scale-down;
  flex-grow: 1;
  border-radius: 5rem 0 0 5rem;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  justify-self: end;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

export default HomeSection;
