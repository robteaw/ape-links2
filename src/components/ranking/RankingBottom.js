import React from "react";
// styling and animation
import styled from "styled-components";
// images
import adwords from "../../images/adwords.png";

export default function RankingBottom() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <h3>Get Professional Metrics</h3>
            <p>
              Handed out during meeting, with the latest insight on your
              websites analytics.
            </p>
            <h3>Cohesive and Responsive</h3>
            <p>Road maps made tailored to your specific websites goals.</p>
          </Left>
          <img src={adwords} alt={adwords} />
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

  img {
    height: 18.75rem;
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

  @media (max-width: 851px) {
    flex-direction: column;
    padding: 2rem;

    h3 {
      margin-top: 3rem;
    }

    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 15rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;

const Left = styled.div`
  h3 {
    text-align: left;
    margin: 2rem 0;
  }

  p {
    text-align: left;
    line-height: 2rem;
    margin: 1rem 0;
  }
`;
