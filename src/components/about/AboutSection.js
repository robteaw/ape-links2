import React from "react";
// styling and animation
import styled from "styled-components";
import { Container, Wrapper } from "../Container";
import { motion } from "framer-motion/dist/framer-motion";
import { container, textAnim } from "../../animations";

export default function AboutSection() {
  return (
    <Container as={motion.div} variants={container}>
      <Wrapper>
        <motion.h1 variants={textAnim}>
          Trustworthy, Great Service <br />& Outstanding Results
        </motion.h1>
        <Bottom as={motion.div} variants={textAnim}>
          <p>
            Launched in 2017 by co-founders Jonathan Yeras and Andrew Olguin,
            Apelinks is a premier full-service digital marketing agency based in
            Houston Texas.
          </p>
          <p>
            Our mission is to provide the most comprehensive skills along with
            the highest level of customer service in the industry.
          </p>
          <p>
            With over 8 years of combined industry experience, friends Jonathan
            and Andrew have created an outstanding agency and strive every day
            to achieve our lofty goals.
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
            Currently, Apelinks has 6 full-time employees, 100+ contractors, 160
            clients.
          </p>
          <p>
            5,000 companies and manages approximately 100 million in advertising
            a year.
          </p>
          <p>We want to make you number 1 in your space on google.</p>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

// styling
const Bottom = styled.div`
  p {
    text-align: left;
    margin: 1rem 0;
  }
`;
