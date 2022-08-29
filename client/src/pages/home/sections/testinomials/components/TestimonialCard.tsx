import { WebsiteDataTestimonialsSectionTestimonial } from "@server/src/interfaces/mongoose.gen";
import React, { ReactElement } from "react";
import styled from "styled-components";

function TestinomialCard({
  attestant,
  title,
  description,
}: WebsiteDataTestimonialsSectionTestimonial): ReactElement {
  return (
    <Container>
      <Title>"{title}"</Title>
      <Description>{description}</Description>
      <Attestant>- {attestant}</Attestant>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  width: 20em;
  color: white;
  margin: 2em;
  text-align: left;
`;

const Title = styled.div`
  font-size: 2em;
  font-style: italic;
  font-weight: 500;
  width: 80%;
`;

const Description = styled.div`
  padding: 0.5em 0;
  align-self: center;
`;

const Attestant = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export default TestinomialCard;
