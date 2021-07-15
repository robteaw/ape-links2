import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
// images
import ranking from "../../images/ranking.png";

export default function RankingSecond() {
  return (
    <Container>
      <Wrapper>
        <h3>Google Ranks Websites Based On Search Queries</h3>
        <InnerWrapper>
          <img src={ranking} alt={ranking} />

          <Right>
            <p>Google ranks based of a user grade sheet of 200 factors.</p>
            <p>
              Google manually reviews blog post all across the internet and
              periodically craws websites to determine ranking for each website.
            </p>
            <p>
              Bounce rate is important to let google know how useful your
              website is overall.
            </p>
            <p>
              Along with bounce rate and CTR (click through rate) is directly
              correlated to each other.
            </p>
          </Right>
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
  margin-top: 3rem;

  h3 {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 5rem;
  }

  img {
    height: 18.75rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    img {
      height: 15rem;
      margin-bottom: 2rem;
    }
  }
`;

const Right = styled.div`
  p {
    text-align: left;
    line-height: 2rem;
    margin-bottom: 2rem;
    flex-direction: row;
  }
`;
