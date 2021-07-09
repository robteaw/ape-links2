import React, { useEffect, useState } from "react";
// styling and animation
import styled from "styled-components";
// images
import p1a from "../../images/portfolio/p1a.png";
import p1b from "../../images/portfolio/p1b.png";
import p1c from "../../images/portfolio/p1c.png";
import p1d from "../../images/portfolio/p1d.png";
import p1e from "../../images/portfolio/p1e.png";

export default function PortfolioSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h2>Copywriting and Photoshop design for online advertisements.</h2>
          <img src={p1a} alt={p1a} />
          <img src={p1b} alt={p1b} />
          <img src={p1c} alt={p1c} />
          <img src={p1d} alt={p1d} />
          <img src={p1e} alt={p1e} />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// Styling
const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
