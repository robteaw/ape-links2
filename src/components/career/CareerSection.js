import React from "react";
// styling and animation
import styled from "styled-components";

export default function CareerSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>Careers</h1>
          <h5>Posititions Available</h5>
          <p>Web developer</p>
          <p>SEO specialist</p>
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
  margin: 10rem 0 10rem 0;

  h1 {
    margin: 2rem 0;
    text-align: left;
  }

  p {
    text-align: left;
    line-height: 2rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }

  @media (max-width: 1100px) {
    padding: 0 2rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  column-gap: 10rem;
`;
