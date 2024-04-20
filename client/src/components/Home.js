
import React from "react";
import { Link } from "react-router-dom";
 // Import the CSS file here

const Home = () => {
  return (
    <>
      <div>
        <div
          className="text-white py-24 text-center h-screen flex flex-col justify-center"
          style={{
            backgroundImage: "url('/Home.jpeg')",
            backgroundSize: "cover",
            minHeight: "100vh",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mx-auto px-4 flex items-center justify-center">
            <div className="text-center">
              {/* <h1 className="text-8xl font-bold mb-4 animate-text-print">
                Welcome to <span className="text-yellow-300">YourFinance</span>
              </h1>      */}
              <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-7xl text-yellow-300 font-bold">Welcome to Your Finance  </h1>        
              <div className="grid grid-cols-2 gap-4 items-center">
                {/* Left Column */}
                <div>
                  <div className="text-5xl mb-4 flex items-center">
                    <p className="mr-5">Making Finance</p>
                  </div>
                  <div className="text-5xl mb-4 flex items-center">
                    <p className="mr-5">Better For Everyone</p>
                  </div>
                 
                </div>

                {/* Vertical Line */}
                 {/* Adjust height as needed */}

                {/* Right Column */}
                <div>
                  <div className="text-xl mb-4 flex items-center">
                     <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <p className="mr-5">Tools for mastering financial management.</p>
                  </div>
                  <div className="text-xl mb-4 flex items-center">
                     <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <p className="mr-5">It is your one-stop solution for your financial goals</p>
                  </div>
                  <div className="text-xl mb-4 flex items-center">
                     <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
                    <p className="mr-5">Sign up now to start managing your finances like a pro!</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-12 space-x-4">
                <Link
                  to="/login"
                  className="inline-block bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 animate-bounce"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="inline-block bg-white text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 animate-bounce"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;