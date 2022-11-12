/** @format */
import React from "react";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import Concepts from "../components/Concepts";
import SwiperSliderComponent from "../components/SwiperComponent";
import Publications from "../components/Publications";
import Awards from "../components/Awards";
import Office from "../components/Office";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
      <Office />
      <Footer />
    </div>
  );
}
