import React from "react";
// styling and animation
import styled from "styled-components";
import Slider from "react-slick";
import { settings } from "../Container";
// images - set 3
import p3a from "../../images/portfolio/p3a.png";
import p3b from "../../images/portfolio/p3b.png";
import p3c from "../../images/portfolio/p3c.png";
import p3d from "../../images/portfolio/p3d.png";
import p3e from "../../images/portfolio/p3e.png";
import p3f from "../../images/portfolio/p3f.png";

const images = [p3a, p3b, p3c, p3d, p3e, p3f];

export default function PortfolioSecond() {
  <settings />;

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>3D Graphic Design and Animation For Proof of Concept Art.</h2>

          <Slider {...settings}>
            {images.map((img, idx) => (
              <div>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 8rem 0 2rem 0;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
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
