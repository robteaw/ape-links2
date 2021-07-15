import React from "react";
// styling and animations
import styled from "styled-components";
import { settings } from "../Container";
// images
import googleads from "../../images/googleads.png";
import googleanalytics from "../../images/googleanalytics.png";
import ahrefs from "../../images/ahrefs.png";
import facebook from "../../images/facebook.png";
import majestic from "../../images/majestic.png";
import raven from "../../images/raven.png";
import semrush from "../../images/semrush.png";

export default function Logo() {
  return (
    <Icon>
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img src={googleads} alt={googleads} />
          </div>

          <div className="slide">
            <img src={googleanalytics} alt={googleanalytics} />
          </div>

          <div className="slide">
            <img src={ahrefs} alt={ahrefs} />
          </div>

          <div className="slide">
            <img src={facebook} alt={facebook} />
          </div>

          <div className="slide">
            <img src={majestic} alt={majestic} />
          </div>

          <div className="slide">
            <img src={raven} alt={raven} />
          </div>

          <div className="slide">
            <img src={semrush} alt={semrush} />
          </div>
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

  img {
    height: 4rem;
    margin: 2rem;
    padding: 0 2.5rem;
  }

  .slider {
    overflow: hidden;
    position: relative;
    margin: auto;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.5);
  }

  .slider::before,
  .slider::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 100px;
    z-index: 2;
  }

  .slider::before {
    top: 0;
    left: 0;
  }

  .slider::after {
    top: 0;
    right: 0;
    transform: rotateZ(180deg);
  }

  .slider .slider-track {
    display: flex;
    width: calc(250px * 14);
    animation: scroll 10s infinite linear;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(calc(250px * 7));
    }
  }
`;
