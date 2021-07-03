import React from "react";
// styling and animations
import styled from "styled-components";

function HeroText() {
  return (
    <Container>
      <h1>Most Ferious </h1>
      <h1>SEO & Marketing Service</h1>
      <p>
        We have been ranking websites for over eight years now, and our SEO/PPC
        animals are the best in class and are your competitor's dread.
      </p>
      <BtnContainer>
        <button className="learnmore">Learn More</button>
        <button>Request Demo</button>
      </BtnContainer>
    </Container>
  );
}

export default HeroText;

const Container = styled.div`
  padding: 1rem;
  h1 {
    font-size: 3.5rem;
    font-family: "Raleway";
    font-weight: 700;

    &:nth-of-type(1) {
      color: var(--headColor2);
    }

    &:nth-of-type(2) {
      color: var(--headColor3);
    }
  }

  p {
    color: var(--linkColor);
    font-size: 1rem;
    margin: 0.5rem;
    line-height: 2rem;
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
  }

  .learnmore {
    color: var(--linkColor);
    background: transparent;
    border: 3px solid var(--linkColor);
  }
`;