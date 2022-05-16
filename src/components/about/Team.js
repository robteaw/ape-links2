import React from "react";
// styling and animation
import { Container, Wrapper } from "../Container";
import Person from "./Person";
import { motion } from "framer-motion/dist/framer-motion";
import { textAnim } from "../../animations";
import { useScroll } from "../useScroll";

export default function Team() {
  const [element, controls] = useScroll();

  return (
    <Container>
      <Wrapper>
        <motion.h1
          initial="hidden"
          variants={textAnim}
          animate={controls}
          ref={element}
        >
          Meet The Team
        </motion.h1>
        <Person />
      </Wrapper>
    </Container>
  );
}
