import React from "react";
// styling and animations
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim } from "../../animations";
import { useScroll } from "../useScroll";
// images
import googleads from "../../images/googleads.png";
import googleanalytics from "../../images/googleanalytics.png";
import ahrefs from "../../images/ahrefs.png";
import facebook from "../../images/facebook.png";
import majestic from "../../images/majestic.png";
import raven from "../../images/raven.png";
import semrush from "../../images/semrush.png";

export default function Logo() {
  const [element, controls] = useScroll();

  return (
    <Icon
      as={motion.div}
      initial="hidden"
      variants={textAnim}
      animate={controls}
      ref={element}
    >
      <div className="slider">
        <div className="slide">
          <img src={googleads} alt={googleads} />
          <img src={googleanalytics} alt={googleanalytics} />
          <img src={ahrefs} alt={ahrefs} />
          <img src={facebook} alt={facebook} />
          <img src={majestic} alt={majestic} />
          <img src={raven} alt={raven} />
          <img src={semrush} alt={semrush} />
        </div>

        <div className="slide">
          <img src={googleads} alt={googleads} />
          <img src={googleanalytics} alt={googleanalytics} />
          <img src={ahrefs} alt={ahrefs} />
          <img src={facebook} alt={facebook} />
          <img src={majestic} alt={majestic} />
          <img src={raven} alt={raven} />
          <img src={semrush} alt={semrush} />
        </div>
      </div>
    </Icon>
  );
}

// styling
const Icon = styled.div`
  background: var(--secondBg);
  display: flex; // center logos
  justify-content: center;
  align-items: center;

  .slider {
    width: 100%;
    height: 6.25rem;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .slide {
    height: 6.25rem;
    display: flex;
    align-items: center;
    animation: slideshow 8s linear infinite;
  }
  .slide img {
    height: 4.375rem;
    margin: 2rem;
    padding: 0 2rem;
  }

  .slider::before,
  .slider::after {
    height: 6.25rem;
    width: 100%;
    position: absolute;
    content: "";
    z-index: 2;
  }
  .slider::before {
    left: 0;
    top: 0;
  }
  .slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  @keyframes slideshow {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-100%);
    }
  }
`;
