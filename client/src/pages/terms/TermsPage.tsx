import { useWebsiteDatas } from "@src/hooks/restApi";
import React, { ReactElement } from "react";
import styled from "styled-components";

function TermsPage(): ReactElement {
  const websiteDatas = useWebsiteDatas();

  if (!websiteDatas) {
    return <>Loading</>;
  }

  return (
    <Container>
      Terms
      <p>{websiteDatas[0].terms}</p>
    </Container>
  );
}

const Container = styled.div`
  word-wrap: break-word;
`;

export default TermsPage;
