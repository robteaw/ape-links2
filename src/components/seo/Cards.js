import React from "react";
// styling and animation
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { imgAnim } from "../../animations";
// images
import mechanic from "../../images/mechanic.png";
import test from "../../images/test.png";
import target from "../../images/target.png";

export default function Cards() {
  return (
    <Container as={motion.div} variants={imgAnim}>
      <Card>
        <img src={mechanic} alt={mechanic} />
        <h3>Phrase 1</h3>
        <p>
          Determine the mechanical reasons your website is falling behind
          competitors.
        </p>
      </Card>
      <Card>
        <img src={test} alt={test} />
        <h3>Phrase 2</h3>
        <p>
          Run test campaigns to gauge how well your audience responds to
          different marketing strategies
        </p>
      </Card>
      <Card>
        <img src={target} alt={target} />
        <h3>Phrase 3</h3>
        <p>
          35 weeks later you should be seeing dramatic results. Sit back, relax,
          and let our analytic research keep you afloat.
        </p>
      </Card>
    </Container>
  );
}

// styling
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  padding: 2rem;

  img {
    height: 8rem;
  }

  @media (max-width: 1090px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;

    img {
      height: 7rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Card = styled.div`
  width: 18rem;
  padding: 2rem;

  h3 {
    margin: 2rem 0;
  }

  p {
    text-align: left;
  }

  &:hover {
    border-radius: 2.5%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
