import React from "react";
// styling and animation
import styled from "styled-components";

export default function SeoSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>
            Texas SEO Services <br /> <span>& Monthly Campaigns</span>
          </h1>
          <BtnContainer>
            <button>Free Quote</button>
          </BtnContainer>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const Container = styled.div`
  background: var(--heroBg);
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
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
  justify-content: center;
  align-items: center;
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
