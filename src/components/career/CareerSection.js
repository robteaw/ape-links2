import React from "react";
// styling and animation
import styled from "styled-components";

export default function CareerSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>Careers</h1>
          <h5>Positions Available</h5>
          <span>
            <p>Web developer</p>
            <p>SEO specialist</p>
          </span>
          <p>
            To apply, send email with a resume to
            <a href="mailto:seoapelinks@gmail.com"> seoapelinks@gmail.com</a>
          </p>
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

  h5 {
    color: var(--teamColor);
  }

  span p {
    text-align: left;
    line-height: 2rem;
    margin: 2rem 0 2rem 2rem;
  }

  a {
    color: var(--teamColor);
    text-decoration: none;

    &:hover {
      color: var(--navColor);
    }
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
