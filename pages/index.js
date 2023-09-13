/* eslint-disable @next/next/no-img-element */
import React from "react";
import BonusBall from "../components/BonusBall";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <BonusBall />
      <HeroSection />
      <PortfolioSection />
      <AboutMe />
      <Footer />
    </>
  );
}
