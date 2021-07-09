import React from "react";
// styling and animation
import styled from "styled-components";
// images
import ppcImg from "../../images/ppc.png";

export default function PpcBottom() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <img src={ppcImg} alt={ppcImg} />
          <Right>
            <h3>SEO & PPC</h3>
            <p>search engine optimization & pay per click</p>
            <p>
              <b>SEO:</b> Is the science of building traffic for free by
              achieving high rankings in the natural search results.
            </p>
            <p>
              <b>PPC:</b> You can pay for traffic using the PPC advertising
              programs provided by Google Adwords, Yahoo Search Marketing and
              others. They enable you to display ads in the sponsored results
              section of each search engine's results page. Then, you pay a fee
              -- based on how competitive your chosen keyword is.
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
  margin: 10rem 0;

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
      font-size: 1.5rem;
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
