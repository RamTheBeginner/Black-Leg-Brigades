import React from "react";
import Nav from "../nav";
import FAQ from "./components/faq";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Nav />
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-lg shadow-xl mx-4 md:mx-24">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center leading-tight">
          About Our Financial App
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Our app is designed to help you manage your finances with ease. Whether you're tracking expenses, monitoring savings, or planning for the future, our app offers a range of tools to keep you in control.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-6">
          We prioritize security, accessibility, and user-friendly interfaces to ensure you have the best experience possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Track Your Expenses</h2>
            <p className="text-gray-700 leading-relaxed">
              Easily log and categorize your expenses. Our detailed reports help you understand your spending habits and identify areas where you can save.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Split Expenses with Friends</h2>
            <p className="text-gray-700 leading-relaxed">
              Easily manage shared expenses by creating groups with friends. Split the bill and track who owes what, ensuring that everyone stays on top of their finances.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Monitor Your Savings</h2>
            <p className="text-gray-700 leading-relaxed">
              Set savings goals and watch your progress in real-time. Our app makes saving easy by helping you automate your savings strategy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Plan for the Future</h2>
            <p className="text-gray-700 leading-relaxed">
              Use our forecasting tools to plan for upcoming expenses and future financial milestones. We give you the insights needed to stay ahead.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Stay Secure</h2>
            <p className="text-gray-700 leading-relaxed">
              Your security is our top priority. We use the latest encryption and authentication technologies to keep your financial data safe.
            </p>
          </div>

          

          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Monitor Stocks & Crypto</h2>
            <p className="text-gray-700 leading-relaxed">
              Keep an eye on your investments with real-time updates on stock prices and cryptocurrency values. Stay informed and make smarter investment decisions.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/home"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started Now
          </NavLink>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-4xl">
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default About;
