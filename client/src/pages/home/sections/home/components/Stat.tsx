import React, { ReactElement } from "react";
import styled from "styled-components";

interface StatProps {
  title: string;
  value: string;
};

function Stat({ title, value }: StatProps): ReactElement {
  return (
    <Container>
      <Value>{value}</Value>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 2em;
  color: #1E3A8A;
`

const Value = styled.div`
  font-size: 1.5em;
  color: #1E3A8A;
`

export default Stat;