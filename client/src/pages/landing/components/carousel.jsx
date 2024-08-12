import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../index.css";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    bgImage: "../../../../public/slide-1.webp",
    title1: "Simplify And Secure",
    title2: "Your Payments with",
    highlight: "Our Solution",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus",
      "Porro iste qui ipsam iusto eligendi totam? Quo omnis",
    ],
  },
  {
    bgImage:
      "https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1.png&w=3840&q=75",
    title1: "Simplify And Secure",
    title2: "Your Payments with",
    highlight: "Our Solution",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus",
      "Porro iste qui ipsam iusto eligendi totam? Quo omnis",
    ],
  },
  {
    bgImage:
      "https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1-1.png&w=3840&q=75",
    title1: "Simplify And Secure",
    title2: "Your Payments with",
    highlight: "Our Solution",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus",
      "Porro iste qui ipsam iusto eligendi totam? Quo omnis",
    ],
  },
];

const FullWidthCarousel = () => {
  const navigate = useNavigate();

  return (
    <Carousel
      interval={3000}
      controls={true}
      indicators={true}
      fade={false}
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="h-screen w-full">
          <div
            className={`flex h-full w-full items-center bg-[url('${slide.bgImage}')] bg-cover bg-center`}
          >
            <div
              className="px-2 ml-4 space-y-4"
              style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
            >
              <div className="text-left text-black font-weight-900 text-6xl font-bold space-y-6 animate-slide-up">
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
                  onClick={() => navigate("/auth")}
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
