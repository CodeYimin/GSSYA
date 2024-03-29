import React, { ReactElement } from "react";
import styled from "styled-components";

interface StatProps {
  title: string;
  value: string;
}

function Stat({ title, value }: StatProps): ReactElement {
  return (
    <Container>
      <Value>{value}</Value>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: #1e3a8a;
`;

const Value = styled.div`
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  color: #1e3a8a;
`;

export default Stat;
