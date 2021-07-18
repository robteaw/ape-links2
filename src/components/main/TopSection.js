import React from "react";
// styling and animation
import styled from "styled-components";
// images
import { RiEmotionHappyLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";

export default function TopSection() {
  return (
    <>
      <Top id="more">
        <h5>
          <RiEmotionHappyLine /> 100+ Happy Clients
        </h5>
        <h5>
          <GiReceiveMoney /> Affordable Prices
        </h5>
        <h5>
          <FaLaptopCode /> SEO Experts
        </h5>
      </Top>
    </>
  );
}

// styling
const Top = styled.div`
  color: #fff;
  background: var(--secondBg);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding: 2.5rem 0;
`;
