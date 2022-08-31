import { WebsiteDataEventsSectionEvent } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

function EventCard({
  title,
  image,
  startDate,
  endDate,
}: WebsiteDataEventsSectionEvent): ReactElement {
  return (
    <Container>
      <Image src={image} />
      <Title>{title}</Title>
      <Date>
        {startDate.toLocaleDateString()}
        {endDate && ` - ${endDate.toLocaleDateString()}`}
      </Date>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  margin: 0 3em;
  transition: all 0.5s ease-in-out;
`;

const Image = styled.img`
  height: 20em;
  object-fit: scale-down;
`;

const Title = styled.div`
  margin-top: 0.5em;
  font-size: 2em;
  font-weight: 500;
`;

const Date = styled.div`
  font-size: 1.2em;
`;

export default EventCard;
