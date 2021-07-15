import React from "react";
import HeroSection from "../components/hero/HeroSection";
import TopSection from "../components/main/TopSection";
import InfoSection from "../components/main/InfoSection";
import Logo from "../components/main/Logo";
import Offer from "../components/main/Offer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopSection />
      <InfoSection />
      <Logo />
      <Offer />
    </>
  );
}
