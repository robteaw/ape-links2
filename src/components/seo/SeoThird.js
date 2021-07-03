import React from "react";
// styling and animation
import styled from "styled-components";
import Cards from "./Cards";

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
const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
`;

const Wrapper = styled.div`
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
