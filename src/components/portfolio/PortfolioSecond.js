import React from "react";
// styling and animation
import styled from "styled-components";
import Slider from "react-slick";
import { settings } from "../Container";
// images - set 2
import p2a from "../../images/portfolio/p2a.jpg";
import p2b from "../../images/portfolio/p2b.jpg";
import p2c from "../../images/portfolio/p2c.jpg";
import p2d from "../../images/portfolio/p2d.jpg";
import p2e from "../../images/portfolio/p2e.jpg";
import p2f from "../../images/portfolio/p2f.jpg";
import p2g from "../../images/portfolio/p2g.jpg";
import p2h from "../../images/portfolio/p2h.jpg";

const images = [p2a, p2b, p2c, p2d, p2e, p2f, p2g, p2h];

export default function PortfolioSecond() {
  <settings />;

  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>We Also Provide Professional State of the Art Photography.</h2>

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
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
