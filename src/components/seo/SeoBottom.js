import React from "react";
// styling and animation
import styled from "styled-components";
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
          <img src={success} alt={success} />
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
    height: 22rem;
  }

  p {
    line-height: 2rem;
    margin: 1rem 0;
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
  }
`;
