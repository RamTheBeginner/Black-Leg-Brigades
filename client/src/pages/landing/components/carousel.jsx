import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../index.css'; // Import the CSS file with the animation

const FullWidthCarousel = () => {
  return (
    <Carousel
      interval={3000} // Auto-play interval in milliseconds
      controls={true} // Show carousel controls
      indicators={true} // Show indicators
      fade={false} // Set to false for slide transition effect
      className="h-screen"
    >
      {/* First Division */}
      <Carousel.Item className="h-screen w-full">
        <div className="flex h-full w-full items-center bg-[url('https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1-2.png&w=3840&q=75')] bg-cover bg-center">
          <div className="px-2 ml-4 space-y-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <div className="text-left text-black font-weight-900 text-6xl font-bold space-y-6 animate-slide-up">
              <div className="flex flex-col space-y-4">
                <span>Simplify And Secure</span>
                <span>Your Payments with</span>
              </div>
            </div>
            <div className="text-left text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up">
              <span>Our Solution</span>
              <br />
            </div>
            <div className="space-y-2 pt-2 animate-slide-up">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
              <p>Porro iste qui ipsam iusto eligendi totam? Quo omnis</p>
            </div>
            <div className="py-8 animate-slide-up">
              <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Get Started with Us
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* Second Division */}
      <Carousel.Item className="h-screen w-full">
        <div className="flex h-full w-full items-center bg-[url('https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1.png&w=3840&q=75')] bg-cover bg-center">
          <div className="px-2 ml-4 space-y-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <div className="text-left text-black font-weight-900 text-6xl font-bold space-y-6 animate-slide-up">
              <div className="flex flex-col space-y-4">
                <span>Simplify And Secure</span>
                <span>Your Payments with</span>
              </div>
            </div>
            <div className="text-left text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up">
              <span>Our Solution</span>
              <br />
            </div>
            <div className="space-y-2 pt-2 animate-slide-up">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
              <p>Porro iste qui ipsam iusto eligendi totam? Quo omnis</p>
            </div>
            <div className="py-8 animate-slide-up">
              <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Get Started with Us
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* Third Division */}
      <Carousel.Item className="h-screen w-full">
        <div className="flex h-full w-full items-center bg-[url('https://finatex-next.vercel.app/_next/image?url=%2Fimages%2Fslider%2Fslider1-1.png&w=3840&q=75')] bg-cover bg-center">
          <div className="px-2 ml-4 space-y-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <div className="text-left text-black font-weight-900 text-6xl font-bold space-y-6 animate-slide-up">
              <div className="flex flex-col space-y-4">
                <span>Simplify And Secure</span>
                <span>Your Payments with</span>
              </div>
            </div>
            <div className="text-left text-blue-500 font-weight-900 text-6xl font-bold animate-slide-up">
              <span>Our Solution</span>
              <br />
            </div>
            <div className="space-y-2 pt-2 animate-slide-up">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus</p>
              <p>Porro iste qui ipsam iusto eligendi totam? Quo omnis</p>
            </div>
            <div className="py-8 animate-slide-up">
              <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
                Get Started with Us
              </button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default FullWidthCarousel;
