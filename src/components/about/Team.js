import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import Person from "./Person";

export default function Team() {
  return (
    <Container>
      <Wrapper>
        <h1>Meet The Team</h1>
        <Person />
      </Wrapper>
    </Container>
  );
}
