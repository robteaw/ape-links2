import React from "react";
import PortfolioTop from "../components/portfolio/PortfolioTop";
import PortfolioSecond from "../components/portfolio/PortfolioSecond";
import PortfolioThird from "../components/portfolio/PortfolioThird";
import PortfolioBottom from "../components/portfolio/PortfolioBottom";

export default function Portfolio() {
  return (
    <>
      <PortfolioTop />
      <PortfolioSecond />
      <PortfolioThird />
      <PortfolioBottom />
    </>
  );
}
