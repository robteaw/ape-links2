import React from "react";
// styling and animation
import styled from "styled-components";
import Tilt from "react-tilt";
import { Container, Wrapper } from "../Container";
// images
import success from "../../images/success.png";

export default function SeoBottom() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <h3>Lead The Market</h3>
            <p>
              With the plethora of expertise we have with Houston SEO, web
              design, social media marketing, and reputation management, we are
              the dominant search optimization agency in Texas. We flood the
              first page of Google for clients on a local, and global level.
            </p>
            <p>
              The sad part is, most Houston SEO companies have no clue how to
              preform up-to-date search engine marketing, and will only stagnate
              or hinder your website, and reputation, in the search engines by
              doing very poor quality SEO tactics. We stand firm by what we do,
              and our results speak for themselves.
            </p>
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <img src={success} alt={success} />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;

  img {
    height: 22rem;
  }

  @media (max-width: 851px) {
    flex-direction: column-reverse;
    padding: 2rem;
  }

  @media (max-width: 768px) {
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

const Left = styled.div`
  h3 {
    text-align: left;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
    margin: 1rem 0;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;

  @media (max-width: 670px) {
    display: none;
  }
`;
