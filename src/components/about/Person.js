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
          <h4>Jonathan Yeras</h4>
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

      <Card>
        <Name>
          <img src={olguin} alt={olguin} />
          <h4>Andrew Olguin</h4>
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
  margin: 5rem;
  column-gap: 15rem;

  h4 {
    color: var(--teamColor);
    margin: 2rem 0;
  }

  p {
    line-height: 2rem;
    text-align: left;
  }

  img {
    height: 10rem;
  }

  @media (max-width: 923px) {
    flex-direction: column;

    h4 {
      font-size: 1.3rem;
    }
  }
`;

const Name = styled.div``;

const Skill = styled.div``;
