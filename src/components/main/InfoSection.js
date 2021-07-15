import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";

export default function InfoSection() {
  return (
    <Container>
      <Wrapper>
        <Bottom>
          <h1>Best in Class SEO & PPC Services</h1>
          <p>
            If you are looking for a Brave and Bold search engine marketing
            agency, you have found the right gorilla for the job. We have been
            honing our skills our work speaks for itself. This is exactly why
            our clients stay engaged with a month-to-month retainer. If we do
            not perform, we do not get paid.
          </p>
          <p>
            Clients prefer ruthless and relentless over boring and tasteless. We
            deliver results, generate revenue, and stay on top of market
            changes. For prospective new clients, We will sit down with your
            team and find out the best direction for your company to go.
          </p>
          <p>
            Just give us a call today. Expect a genius gorilla to answer the
            phone and help you understand what our team can do to kickstart or
            get your online marketing campaign back on track.
          </p>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

// styling
const Bottom = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;
