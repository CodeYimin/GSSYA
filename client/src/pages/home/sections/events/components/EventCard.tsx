import { WebsiteDataEventsSectionEvent } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

function EventCard({
  title,
  image,
  startDate,
  endDate,
  button,
}: WebsiteDataEventsSectionEvent): ReactElement {
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Date>
        {startDate.toLocaleDateString()}
        {endDate && ` - ${endDate.toLocaleDateString()}`}
      </Date>
      {(button?.link || button?.label) && (
        <LinkButton href={button.link} target="_blank">{button.label}</LinkButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 3rem;
  transition: all 0.5s ease-in-out;
`;

const Image = styled.img`
  height: 20rem;
  object-fit: scale-down;
`;

const Title = styled.div`
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 500;
`;

const Date = styled.div`
  font-size: 1.2rem;
`;

const LinkButton = styled.a`
  padding: 0.75rem 1rem;
  background-color: #193da1;
  border-radius: 0.5rem;
  margin-top: 1rem;

  &:hover {
    background-color: #1e3a8a;
    cursor: pointer;
  }
`;

export default EventCard;
