import React from "react";
import ControlledCarousel from "./components/carousel";
import Cards from "./components/Card";

const LandingPage = () => {
  return (
    <div className="w-full">
      <div className="h-screen">
        <ControlledCarousel />
      </div>

      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up mt-6">
          <span>Our Services</span>
        </div>
        <div className="mt-8 w-full flex-grow flex justify-center items-center">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
