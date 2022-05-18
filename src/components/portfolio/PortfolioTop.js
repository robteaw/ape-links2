import React from "react";
// styling and animation
import styled from "styled-components";
import Slider from "react-slick";
import { settings } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim, imgAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images - set 1
import p1a from "../../images/portfolio/p1a.png";
import p1b from "../../images/portfolio/p1b.png";
import p1c from "../../images/portfolio/p1c.png";
import p1d from "../../images/portfolio/p1d.png";
import p1e from "../../images/portfolio/p1e.png";

const images = [p1a, p1b, p1c, p1d, p1e];

export default function PortfolioTop() {
  const [element, controls] = useScroll();
  <settings />;

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <motion.h2
            initial="hidden"
            variants={textAnim}
            animate={controls}
            ref={element}
          >
            Copywriting and Photoshop design for online advertisements.
          </motion.h2>

          <motion.div
            initial="hidden"
            variants={imgAnim}
            animate={controls}
            transition={{
              duration: 1,
            }}
            ref={element}
          >
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div>
                  <img src={img} alt={img} />
                </div>
              ))}
            </Slider>
          </motion.div>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  h2 {
    margin: 8rem 0 2rem 0;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 95vw;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  img {
    width: 100%;
    border: 0.5rem solid #fff;
    transition: 0.5s all ease-in-out;
    cursor: pointer;
  }
`;
