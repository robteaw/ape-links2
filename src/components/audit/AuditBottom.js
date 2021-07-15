import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
// images
import unlock from "../../images/unlock.png";

export default function AuditBottom() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <h3>Its Time To Unlock Your Websites Potential</h3>
            <p>
              In order to make your website stand out from the rest, you need to
              have a vision and mission. Vision and mission works as follows:
            </p>
            <p>
              Vision: Have a picture in your head about what you want your
              company to look like in 5 years. 5 years is a long time to learn
              from the companies slip ups and implement experience to make the
              company better.
            </p>
            <p>
              Mission: Now we know where we want to go, now lets get there. Make
              a road map of the steps you should complete along the way.
            </p>
          </Left>
          <img src={unlock} alt={unlock} />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
}

// styling
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  column-gap: 10rem;

  img {
    height: 22rem;
  }

  p {
    margin: 1rem 0;
  }

  @media (max-width: 1100px) {
    padding: 2rem;
  }

  @media (max-width: 851px) {
    flex-direction: column-reverse;

    img {
      height: 18rem;
      margin-top: 2rem;
    }

    h3 {
      margin-top: 3rem;
    }

    p {
      margin-bottom: 3rem;
      margin: 1rem 0;
    }
  }

  @media (max-width: 576px) {
    img {
      height: 15rem;
    }
  }
`;

const Left = styled.div`
  h3 {
    text-align: left;
    margin-bottom: 2rem;
  }

  p {
    text-align: left;
  }
`;
