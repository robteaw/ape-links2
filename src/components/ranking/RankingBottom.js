import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { imgAnim, textAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images
import adwords from "../../images/adwords.png";

export default function RankingBottom() {
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
        <InnerWrapper>
          <Left as={motion.div} variants={textAnim}>
            <h3>Get Professional Metrics</h3>
            <p>
              Handed out during meeting, with the latest insight on your
              websites analytics.
            </p>
            <h3>Cohesive and Responsive</h3>
            <p>Road maps made tailored to your specific websites goals.</p>
          </Left>
          <motion.img variants={imgAnim} src={adwords} alt={adwords} />
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

  img {
    height: 18.75rem;
    width: 28.125rem;
  }

  p {
    margin-bottom: 3rem;
    margin: 1rem 0;
  }

  @media (max-width: 851px) {
    flex-direction: column;

    h3 {
      margin-top: 3rem;
    }

    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 15rem;
      width: 20rem;
    }
  }
`;

const Left = styled.div`
  h3 {
    text-align: left;
    margin: 2rem 0;
  }

  p {
    text-align: left;
    margin: 1rem 0;
  }
`;
