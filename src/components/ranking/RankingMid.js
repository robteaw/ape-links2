import React from "react";
// styling and animation
import styled from "styled-components";
// images
import analytics from "../../images/g-analytics.png";
import console from "../../images/console.png";

export default function RankingThird() {
  return (
    <Container>
      <Wrapper>
        <h3>LEARN HOW TO INTEGRATE THESE TOOLS FOR YOUR BUSINESS</h3>

        <InnerWrapper>
          <img src={analytics} alt={analytics} />
          <img src={console} alt={console} />
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
  margin-bottom: 10rem;

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  img {
    height: 18.75rem;
    width: 28.125rem;
  }

  @media (max-width: 1200px) {
    padding: 2rem;
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
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10rem;

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    padding: 2rem;

    h3 {
      margin-top: 3rem;
    }

    img {
      margin: 2rem 0;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 15rem;
      width: 20rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;
