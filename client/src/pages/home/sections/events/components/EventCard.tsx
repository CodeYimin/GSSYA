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

export default EventCard;
