import React from "react";
import { Link } from "react-router-dom";
// styling and animations
import styled from "styled-components";

export default function HeroText() {
  return (
    <Container>
      <h1>Most Ferious </h1>
      <h1>SEO & Marketing Service</h1>
      <p>
        We have been ranking websites for over eight years now, and our SEO/PPC
        animals are the best in class and are your competitor's dread.
      </p>
      <BtnContainer>
        <a href="/#more">
          <button className="learnmore">Learn More</button>
        </a>
        <Link to="/contact">
          <button>Request Demo</button>
        </Link>
      </BtnContainer>
    </Container>
  );
}

// styling
const Container = styled.div`
  padding: 1rem;
  h1 {
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
  }
`;

const BtnContainer = styled.div`
  margin-top: 2rem;

  .learnmore {
    color: var(--linkColor);
    background: transparent;
    border: 3px solid var(--linkColor);

    &:hover {
      color: black;
      background: var(--btnColor2);
      box-shadow: 0px 17px 16px -11px #ffd700;
    }
  }
`;
