import { WebsiteDataHomeSection } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

function HomeSection({
  title,
  subtitle,
}: WebsiteDataHomeSection): ReactElement {
  return (
    <Container id="home" className="">
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {/* <a
          href="#about"
          className="w-max mx-auto border-2 border-blue-900 mt-6 rounded-full px-10 py-1 hover:bg-blue-100 transition"
        >
          <i className="bi bi-arrow-down text-blue-900 text-center text-xl" />
        </a> */}
        {/* <StatsContainer>
          <Stat title="Students" value="395" />
        </StatsContainer> */}
      </TextContainer>
      <Image src="images/kids-studying.jpg" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  width: 50%;
  margin-left: 5rem;
  color: #183ea5;
`;

const Title = styled.div`
  font-size: 4rem;
  letter-spacing: 0.25rem;
  font-weight: 700;
  line-height: 5rem;

  &::after {
    font-size: 1rem;
    font-weight: 500;
    content: "Founded in 2019";
    margin-left: 3rem;
  }
`;

const Subtitle = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
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
  padding-top: 3rem;
`;

export default HomeSection;
