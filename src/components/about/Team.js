import React from "react";
// styling and animation
import styled from "styled-components";
import Person from "./Person";

export default function Team() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>Meet The Team</h1>
          <Person />
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
  margin-top: 10rem;

  h1 {
    margin-bottom: 5rem;
  }

  @media (max-width: 923px) {
    h1 {
      font-size: 2rem;
    }
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
