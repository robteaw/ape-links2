import React from "react";
// styling and animation
import styled from "styled-components";
import Slider from "react-slick";
import { settings } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim, imgAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images - set 4
import p4a from "../../images/portfolio/p4a.png";
import p4b from "../../images/portfolio/p4b.png";
import p4c from "../../images/portfolio/p4c.png";
import p4d from "../../images/portfolio/p4d.png";
import p4e from "../../images/portfolio/p4e.png";
import p4f from "../../images/portfolio/p4f.png";

const images = [p4a, p4b, p4c, p4d, p4e, p4f];

export default function PortfolioBottom() {
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
            Vector Art Branding for Various Types of Industries.
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
  margin-bottom: 10rem;
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
  h2 {
    margin: 8rem 0 2rem 0;
  }
  img {
    width: 100%;
    border: 0.5rem solid #fff;
    transition: 0.5s all ease-in-out;
    cursor: pointer;
  }
`;
