import React from "react";
import { Link } from "react-router-dom";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim } from "../../animations";
import { useScroll } from "../useScroll";

export default function AuditTop() {
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
          <h1>72 Hour Website Audit</h1>
          <p>Manual Website Crawling. Click below to crawl your website.</p>
          <Link to="/contact">
            <motion.button variants={textAnim}>Crawl</motion.button>
          </Link>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    text-align: center;
  }

  p {
    margin: 1rem 0;
  }

  @media (max-width: 851px) {
    flex-direction: column;

    h2 {
      font-size: 2rem;
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }
`;
