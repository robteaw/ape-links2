import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { imgAnim, textAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images
import analytics from "../../images/g-analytics.png";
import console from "../../images/console.png";

export default function RankingThird() {
  const [element, controls] = useScroll();

  return (
    <Container
      as={motion.div}
      initial="hidden"
      variants={textAnim}
      animate={controls}
      ref={element}
    >
      <Wrapper>
        <motion.h3 variants={textAnim}>
          Learn How To Integrate These Tools For Your Business
        </motion.h3>

        <InnerWrapper as={motion.div} variants={imgAnim}>
          <img src={analytics} alt={analytics} />
          <img src={console} alt={console} />
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
  text-align: center;
  column-gap: 10rem;
  margin-top: 3rem;

  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }

  img {
    height: 18.75rem;
    width: 28.125rem;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;

    h3 {
      margin-top: 3rem;
    }

    img {
      margin: 2rem 0;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 15rem;
      width: 20rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;
