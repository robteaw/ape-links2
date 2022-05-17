import React from "react";
// styling and animation
import styled from "styled-components";
import Tilt from "react-tilt";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { imgAnim, textAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images
import seoImg from "../../images/seo.png";

export default function SeoSecond() {
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
          <TiltWrapper options={{ max: 25 }}>
            <motion.img variants={imgAnim} src={seoImg} alt={seoImg} />
          </TiltWrapper>
          <Right>
            <h3>Let's Grow Your Business</h3>
            <p>We're The Monkeys To Do It. </p>
            <p>
              We tailor every SEO campaign based on industry, competition,
              location, and your business goals.
            </p>
            <p>
              Serving a wide range of industries, including legal, oil & gas,
              energy, warehouse, manufacturing, retail, medical, e-commerce,
              industrial, martial arts schools, AC repair, and many more.
            </p>
          </Right>
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
  column-gap: 10rem;
  margin-bottom: 5rem;

  img {
    height: 22rem;
  }

  p {
    line-height: 2rem;
    margin: 1rem 0;
  }

  @media (max-width: 851px) {
    flex-direction: column;

    img {
      height: 18rem;
    }

    h3 {
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;

const Right = styled.div`
  h3 {
    text-align: left;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;

  @media (max-width: 670px) {
    display: none;
  }
`;
