import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 10rem 0;

  @media (max-width: 1080px) {
    padding: 0 2rem;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 10rem;
`;

// For Portfolio page
export const settings = {
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
