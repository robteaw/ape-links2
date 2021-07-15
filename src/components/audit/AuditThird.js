import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
// images
import analysis from "../../images/analysis.png";

export default function AuditThird() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <img src={analysis} alt={analysis} />
          <Right>
            <p>
              An accurate analysis of your website is going to answer each of
              these unique questions and also do so in a type of high detail.
              You'll have a set of data called objective data. You can use this
              data to implement great goals for your business.
            </p>
            <p>
              To be completely frank, you shouldn't be spending precious time
              doing a though website analysis unless of course your company has
              an in-house marketing and your only personal responsibility is
              driving up performance from your company's online initiatives.
            </p>
            <p>
              On the contrary, you need to concentrate on the job you excel at.
              Any time you spend doing something else is not doing you or your
              business any favors. Plus this stuff requires a lot of man hours
              you could spend doing on something productive.
            </p>
            <p>
              This is why we suggest you let us do a total SEO website analysis
              for you. This includes complete with a free competitor analysis
              report included and even a consultation with one of our seasoned
              online strategy veterans. This is something we do every day, we’d
              love the chance to save your time by using ours.
            </p>
          </Right>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10rem;

  img {
    height: 22rem;
  }

  p {
    margin: 1rem 0;
  }

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

  @media (max-width: 576px) {
    img {
      height: 15rem;
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
