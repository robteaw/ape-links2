import React from "react";
// styling and animations
import styled from "styled-components";
import Tilt from "react-tilt";
import HeroText from "./HeroText";
// images
import heroBg from "../../images/heroBg.jpg";
import heroImg from "../../images/hero.png";

export default function HeroSection() {
  return (
    <Container
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "darken",
      }}
    >
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <img src={heroImg} alt={heroImg} />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const TiltWrapper = styled(Tilt)`
  width: 60%;

  @media (max-width: 670px) {
    display: none;
  }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Left = styled.div`
  width: 40%;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const Right = styled.div``;
