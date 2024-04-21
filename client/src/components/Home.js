// <<<<<<< HEAD
// import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from './../assets/finance animation2.json';
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import NavBar from './NavBar';
// =======
// >>>>>>> 7b73a5d471edef2634d4c935d0b8688f562049fe

import React, { useState ,useEffect} from 'react';
import { Link } from "react-router-dom";
 // Import the CSS file here
 import { useAuth } from '../contexts/auth'
const Home = () => {

  const { currentUser,userLoggedIn} = useAuth();
  useEffect(() => {
    if(userLoggedIn){
      console.log('you should logout')
    window.location.href = '/dashboard'
    }
  
    
  }, [])
  return (
// <<<<<<< HEAD
//     <div>
//       <div className="content h-full bg-gradient-to-b from-yellow-400 via-white-500 to-yellow-700 text-white py-24 text-center flex flex-col justify-center">
//         <div className='w-full h-10 bg-green-700 text-white font-bold '>
//           <marquee>
//             <h1>Your ultimate solution for financial management</h1>
//           </marquee>
//         </div>
//         <div className=" z-10 px-2">
//           <h1 className="text-5xl py-4 font-bold mb-4">Welcome to YourFinance</h1>
//           <Lottie animationData = {animationData}/> 
//           <div className='text-left font-bold'>
//             <p className="text-lg mb-4 ">Sign up now to start managing your finances like a pro!</p>
//             <p className="text-lg mb-4 ">Your ultimate solution for financial management. Manage your finances efficiently, track your expenses, set budgets, and achieve your financial goals with ease.</p>
//             <p className="text-lg mb-4 ">Whether you're a budgeting novice or a finance guru, YourFinance offers tools and resources to help you take control of your money.</p>
//             <p className="text-lg mb-4 font-semibold">It is your one-stop solution for your financial goals</p>
//           </div>
//           <Link to="/login" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 mx-8">Login</Link>
//           <Link to="/signup" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300">SignUp</Link>
// =======
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
{/* ; */}
        </div>
      </div>
    </>
  );
};

export default Home;