import React from "react";
import { Link } from "react-router-dom";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim } from "../../animations";
import { useScroll } from "../useScroll";

export default function SeoSection() {
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
          <h1>
            Texas SEO Services <br /> <span>& Monthly Campaigns</span>
          </h1>
          <BtnContainer>
            <Link to="/contact">
              <motion.button variants={textAnim}>Free Quote</motion.button>
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
