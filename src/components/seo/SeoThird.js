import React from "react";
// styling and animation
import styled from "styled-components";
import Cards from "./Cards";
import { Container, Wrapper } from "../Container";

export default function SeoThird() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Top>
            <h1>3 Phases To SEO</h1>
          </Top>
          <Cards />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Top = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
