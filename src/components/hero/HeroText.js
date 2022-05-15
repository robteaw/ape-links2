import React from "react";
import { Link } from "react-router-dom";
// styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { titleAnim } from "../../animations";

export default function HeroText() {
  return (
    <Container>
      <motion.h1 variants={titleAnim}>Most Ferious </motion.h1>
      <motion.h1 variants={titleAnim}>SEO & Marketing Service</motion.h1>
      <motion.p variants={titleAnim}>
        We have been ranking websites for over eight years now, and our SEO/PPC
        animals are the best in class and are your competitor's dread.
      </motion.p>
      <BtnContainer>
        <a href="/#more">
          <motion.button variants={titleAnim} className="learnmore">
            Learn More
          </motion.button>
        </a>
        <Link to="/contact">
          <motion.button variants={titleAnim}>Request Demo</motion.button>
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
