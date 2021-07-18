import React from "react";
import { Link } from "react-router-dom";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";

export default function SeoSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>
            Texas SEO Services <br /> <span>& Monthly Campaigns</span>
          </h1>
          <BtnContainer>
            <Link to="/contact">
              <button>Free Quote</button>
            </Link>
          </BtnContainer>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  flex-direction: column;
  text-align: center;

  span {
    margin-left: 10rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    span {
      margin-left: 0.5rem;
    }
  }
`;

const BtnContainer = styled.div`
  margin-top: 2rem;
`;
