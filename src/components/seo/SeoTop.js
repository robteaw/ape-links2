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

  button {
    color: var(--linkColor);
    background-color: var(--btnColor);
    font-size: 0.9rem;
    border: none;
    border-radius: 1rem;
    margin: 0.5rem;
    padding: 0.9rem 1.1rem;
    box-shadow: 0px 13px 24px -7px rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #ffd700;
      transform: translateY(-5px);
    }
`;
