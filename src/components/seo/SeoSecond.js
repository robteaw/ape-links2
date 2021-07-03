import React from "react";
// styling and animation
import styled from "styled-components";
// images
import seoImg from "../../images/seo.png";

export default function SeoSecond() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <img src={seoImg} alt={seoImg} />
          <Right>
            <h3>Let's Grow Your Business</h3>
            <p>We're The Monkeys To Do It. </p>
            <p>
              We tailor every SEO campaign based on industry, competition,
              location, and your business goals.
            </p>
            <p>
              Serving a wide range of industries, including legal, oil & gas,
              energy, warehouse, manufacturing, retail, medical, e-commerce,
              industrial, martial arts schools, AC repair, and many more.
            </p>
          </Right>
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
  margin-top: 10rem;

  img {
    height: 22rem;
  }

  p {
    line-height: 2rem;
    margin: 1rem 0;
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

    img {
      height: 18rem;
    }

    h3 {
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;

const Right = styled.div`
  h3 {
    text-align: left;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
  }
`;
