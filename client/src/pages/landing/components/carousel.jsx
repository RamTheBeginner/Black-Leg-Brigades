import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../index.css"; // Import the CSS file with the animation
import { useNavigate } from "react-router-dom"; // Ensure useNavigate is imported

const slides = [
  {
    bgImage: "https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1-2.png&w=3840&q=75",
    title1: "Experience Financial Freedom",
    title2: "With Innovative Payment Solutions",
    highlight: "Tailored for You",
    description: [
      "Unlock the potential of seamless transactions across borders.",
      "Secure and smart payments designed to adapt to your needs.",
    ],
  },
  {
    bgImage: "https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1.png&w=3840&q=75",
    title1: "Split Expenses Easily",
    title2: "With Friends & Family",
    highlight: "Smart Group Management",
    description: [
      "Track and manage shared costs effortlessly.",
      "Stay organized and avoid confusion with our intuitive tool.",
    ],
  },
  {
    bgImage: "https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1-1.png&w=3840&q=75",
    title1: "Seamless Integration",
    title2: "For Your Financial Growth",
    highlight: "Peace of Mind",
    description: [
      "Effortlessly track your investments and manage your expenses.",
      "We bring simplicity and security to every transaction.",
    ],
  },
];

const FullWidthCarousel = () => {
  const navigate = useNavigate(); // Declare the navigate function

  return (
    <Carousel
      interval={2000} // Auto-play interval in milliseconds
      controls={true} // Show carousel controls
      indicators={true} // Show indicators
      fade={false} // Set to false for slide transition effect
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="h-screen w-full">
          <div
            className={`flex h-full w-full items-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="px-2 ml-4 space-y-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <div className="text-left text-black font-weight-900 text-5xl font-bold space-y-6 animate-slide-up">
                <div className="flex flex-col space-y-4">
                  <span>{slide.title1}</span>
                  <span>{slide.title2}</span>
                </div>
              </div>
              <div className="text-left text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up">
                <span>{slide.highlight}</span>
                <br />
              </div>
              <div className="space-y-2 pt-2 animate-slide-up">
                {slide.description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 py-8 flex justify-center"
                style={{ zIndex: 9999 }}
              >
                <button
                  className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => navigate("/auth")} // Ensure navigate is called correctly
                >
                  Get Started with Us
                </button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default FullWidthCarousel;
