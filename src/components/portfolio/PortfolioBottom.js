import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// images - set 4
import p4a from "../../images/portfolio/p4a.png";
import p4b from "../../images/portfolio/p4b.png";
import p4c from "../../images/portfolio/p4c.png";
import p4d from "../../images/portfolio/p4d.png";
import p4e from "../../images/portfolio/p4e.png";
import p4f from "../../images/portfolio/p4f.png";

const images = [p4a, p4b, p4c, p4d, p4e, p4f];

export default function PortfolioBottom() {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: 0,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 0,
          arrow: true,
        },
      },
    ],
  };
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>Vector Art Branding for Various Types of Industries.</h2>

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
  margin-bottom: 10rem;
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
