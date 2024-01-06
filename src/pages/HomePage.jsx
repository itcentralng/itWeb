import React from "react";
import Advert from "../components/Advert";
import Card from "../components/Card";
import Explore from "../components/Explore";
import HeroSection from "../components/HeroSection";
import Startup from "../components/Startup";
import SummerSection from "../components/SummerSection";

function HomePage() {
  // if the url contains intRoW, then redirect to external link
  if (window.location.href.includes("intRoW")) {
    window.location.href = "https://forms.gle/g61MD1wvikD4RRH29";
  }
  return (
    <>
      <HeroSection />
      <Explore />
      <Startup />
      <Advert />
      {/* <SummerSection /> */}
    </>
  );
}

export default HomePage;
