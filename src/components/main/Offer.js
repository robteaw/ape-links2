import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim, imgAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images
import earned from "../../images/earned.jpg";
import paid from "../../images/paid.jpg";
import email from "../../images/email.jpg";
import video from "../../images/video.jpg";
import camera from "../../images/camera.jpg";
import service from "../../images/service.jpg";

export default function Offer() {
  const [element, controls] = useScroll();

  return (
    <Container>
      <Wrapper>
        <motion.h1
          initial="hidden"
          variants={textAnim}
          animate={controls}
          ref={element}
        >
          What We Offer
        </motion.h1>
        <InnerWrapper>
          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
            transition={{
              duration: 1,
            }}
          >
            <img src={earned} alt={earned} />
            <h5>Earned Media</h5>
            <p>
              SEM, PPC, social media marketing, viral campaigns including photo
              ops, videos, graphical promotions, and digital PR.
            </p>
          </Card>

          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
          >
            <img src={paid} alt={paid} />
            <h5>Paid Media</h5>
            <p>
              Google AdWords and PPC, social media advertising, media buys,
              display advertising.
            </p>
          </Card>

          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
          >
            <img src={email} alt={email} />
            <h5>Email Marketing</h5>
            <p>
              Email deployments, segmentation, automation, list growth
              management, & more.
            </p>
          </Card>

          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
          >
            <img src={video} alt={video} />
            <h5>Video Production</h5>
            <p>
              Cinematography, Budgeting, Casting, Story boarding, Pre & Post
              production & more.
            </p>
          </Card>

          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
          >
            <img src={camera} alt={camera} />
            <h5>Photography</h5>
            <p>Photoshoots, Product pictures, photo editing & more.</p>
          </Card>

          <Card
            as={motion.div}
            initial="hidden"
            variants={imgAnim}
            animate={controls}
          >
            <img src={service} alt={service} />
            <h5>More Services</h5>
            <p>
              We offer a wide range of custom services uniquely tailored to each
              business.
            </p>
          </Card>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  column-gap: 5rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  h5 {
    color: var(--btnColor);
    margin-bottom: 1rem;
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);

    h3 {
      margin-top: 3rem;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  height: 27rem;
  width: 18rem;
  padding: 2rem;
  margin: 1rem 0;

  img {
    height: 10rem;
  }

  &:hover {
    border-radius: 2.5%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
