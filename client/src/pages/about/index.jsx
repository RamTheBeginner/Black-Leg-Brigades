import React from "react";
import Nav from "../nav";
import FAQ from "./components/faq";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Nav />
      <section className="w-full bg-[#aed0e8] p-10 rounded-lg shadow-xl mx-auto md:mx-24">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center leading-tight">
          About Our Financial App
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Our app is designed to help you manage your finances with ease. Whether you're tracking expenses, monitoring savings, or planning for the future, our app offers a range of tools to keep you in control.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-6">
          We prioritize security, accessibility, and user-friendly interfaces to ensure you have the best experience possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 p-4">
          {[
            {
              title: "Track Your Expenses",
              description:
                "Easily log and categorize your expenses. Our detailed reports help you understand your spending habits and identify areas where you can save.",
            },
            {
              title: "Split Expenses with Friends",
              description:
                "Easily manage shared expenses by creating groups with friends. Split the bill and track who owes what, ensuring that everyone stays on top of their finances.",
            },
            {
              title: "Monitor Your Savings",
              description:
                "Set savings goals and watch your progress in real-time. Our app makes saving easy by helping you automate your savings strategy.",
            },
            {
              title: "Plan for the Future",
              description:
                "Use our forecasting tools to plan for upcoming expenses and future financial milestones. We give you the insights needed to stay ahead.",
            },
            {
              title: "Stay Secure",
              description:
                "Your security is our top priority. We use the latest encryption and authentication technologies to keep your financial data safe.",
            },
            {
              title: "Monitor Stocks & Crypto",
              description:
                "Keep an eye on your investments with real-time updates on stock prices and cryptocurrency values. Stay informed and make smarter investment decisions.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300"
            >
              <FaCheckCircle className="text-blue-600 text-4xl mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <NavLink
            to="/home"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Get Started Now
          </NavLink>
        </div>
      </section>

      <section className="w-full bg-[#aed0e8] py-12">
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
