import React from 'react';
import Lottie from 'lottie-react';
import animationData from './../assets/finance animation2.json';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import NavBar from './NavBar';

const Home = () => {
  return (
    <div>
      <div className="content h-full bg-gradient-to-b from-yellow-400 via-white-500 to-yellow-700 text-white py-24 text-center flex flex-col justify-center">
        <div className='w-full h-10 bg-green-700 text-white font-bold text-center font-size[12px]'>
          <marquee>
            <h1>Your ultimate solution for financial management</h1>
          </marquee>
        </div>
        <div className=" z-10 px-2">
          <h1 className="text-5xl py-4 font-bold mb-4">Welcome to YourFinance</h1>
          <Lottie animationData = {animationData}/> 
          <div className='text-left font-bold'>
            <p className="text-lg mb-4 ">Sign up now to start managing your finances like a pro!</p>
            <p className="text-lg mb-4 ">Your ultimate solution for financial management. Manage your finances efficiently, track your expenses, set budgets, and achieve your financial goals with ease.</p>
            <p className="text-lg mb-4 ">Whether you're a budgeting novice or a finance guru, YourFinance offers tools and resources to help you take control of your money.</p>
            <p className="text-lg mb-4 font-semibold">It is your one-stop solution for your financial goals</p>
          </div>
          <Link to="/login" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 mx-8">Login</Link>
          <Link to="/signup" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
