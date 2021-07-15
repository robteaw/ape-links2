import React from "react";
// styling and animation
import styled from "styled-components";
// images
import yeras from "../../images/yeras.png";
import olguin from "../../images/olguin.png";

export default function Person() {
  return (
    <Container>
      <Card>
        <Name>
          <img src={yeras} alt={yeras} />
          <h5>Jonathan Yeras</h5>
        </Name>
        <Skill>
          <p>SEM/SEO Experience</p>
          <p>Data Analyst/ Data Managment</p>
          <p>Expert Marketer</p>
          <p>Graphic Designer and Animator</p>
          <p>Content Marketer / Video Marketer</p>
          <p>Business Development Strategist</p>
        </Skill>
      </Card>
      <hr />
      <Card>
        <Name>
          <img src={olguin} alt={olguin} />
          <h5>Andrew Olguin</h5>
        </Name>
        <Skill>
          <p>SEM/SEO Experience</p>
          <p>Data Analyst/ Data Managment</p>
          <p>Data Research / Market Analyst</p>
          <p>Graphic Designer and Animator</p>
          <p>Content Marketer / Video Marketer</p>
          <p>Business Development Strategist</p>
        </Skill>
      </Card>
    </Container>
  );
}

// styling
const Container = styled.div``;

const Card = styled.div`
  display: flex;
  margin: 4rem 0;
  column-gap: 15rem;

  h5 {
    color: var(--teamColor);
    margin: 2rem 0;
  }

  p {
    text-align: left;
  }

  img {
    height: 10rem;
  }

  @media (max-width: 923px) {
    flex-direction: column;
  }
`;

const Name = styled.div``;

const Skill = styled.div``;
