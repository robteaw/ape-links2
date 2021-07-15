import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";

export default function PpcTop() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>
            Best in Class Search Management <br />& A Google Certified Agency
          </h2>
          <p>For new campaign setups, email or call now to discuss further.</p>
          <button>Free PPC Review</button>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  text-align: center;

  h2 {
    text-align: center;
  }

  p {
    margin: 2rem 0;
  }

  @media (max-width: 851px) {
    flex-direction: column;
    padding: 2rem;

    h2 {
      font-size: 2rem;
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;
