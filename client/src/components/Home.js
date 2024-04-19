import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 text-white py-24 text-center h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to YourFinance</h1>
          <p className="text-lg mb-8">Your ultimate solution for financial management. Manage your finances efficiently, track your expenses, set budgets, and achieve your financial goals with ease.</p>
          <p className="text-lg mb-8">Whether you're a budgeting novice or a finance guru, YourFinance offers tools and resources to help you take control of your money.</p>
          <p className="text-lg mb-8 font-semibold">It is your one-stop solution for your financial goals</p>
          <p className="text-lg">Sign up now to start managing your finances like a pro!</p>
          <Link to="/login" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 mx-8">Login</Link>
          <Link to="/signup" className="inline-block bg-white text-blue-500 px-6 py-3 mt-8 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300">SignUp</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
