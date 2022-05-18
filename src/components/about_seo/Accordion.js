import React, { useState } from "react";
import { Data } from "./Data";
import "../../App.css";
// styling and animation
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion/dist/framer-motion";
import { imgAnim } from "../../animations";

export default function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "--btnColor", size: "2rem" }}>
      <Container as={motion.div} variants={imgAnim}>
        <Wrapper>
          {Data.map((item, index) => {
            return (
              <>
                <InnerWrapper onClick={() => toggle(index)} key={index}>
                  <h2>{item.heading}</h2>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </InnerWrapper>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.description}</p>
                    <p>{item.description2}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Wrapper>
      </Container>
    </IconContext.Provider>
  );
}

const Container = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;

const Wrapper = styled.div`
  /* top: 30%; */
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const InnerWrapper = styled.div`
  background: var(--dropColor);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 0.25rem;
  cursor: pointer;
  h2 {
    padding-left: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem 0 3rem;
`;
