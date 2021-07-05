import React from "react";
// styling and animation
import styled from "styled-components";

export default function AboutSection() {
  return (
    <Container>
      <Wrapper>
        <InnerWrapper>
          <h1>
            Trustworthy, Great Service <br />& Outstanding Results
          </h1>
          <Bottom>
            <p>
              Launched in 2017 by co-founders Jonathan Yeras and Andrew Olguin,
              Apelinks is a premier full-service digital marketing agency based
              in Houston Texas.
            </p>
            <p>
              Our mission is to provide the most comprehensive skills along with
              the highest level of customer service in the industry.
            </p>
            <p>
              With over 8 years of combined industry experience, friends
              Jonathan and Andrew have created an outstanding agency and strive
              every day to achieve our lofty goals.
            </p>
            <p>
              At Apelinks we strive to not only drive traffic and sales to your
              website but also teach you the skills we practice along the way.
            </p>
            <p>
              That way we not only provide excellent service but give you the
              tools to continue to rank long after we are gone.
            </p>
            <p>
              Currently, Apelinks has 6 full-time employees, 100+ contractors,
              160 clients.
            </p>
            <p>
              5,000 companies and manages approximately 100 million in
              advertising a year.
            </p>
            <p>We want to make you number 1 in your space on google.</p>
          </Bottom>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15rem 0 0 0;

  @media (max-width: 923px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
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

const Bottom = styled.div`
  margin-top: 3rem;

  p {
    line-height: 2rem;
    text-align: left;
  }

  @media (max-width: 1100px) {
    padding: 2rem;
  }
`;
