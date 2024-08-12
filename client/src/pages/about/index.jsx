import React from "react";
import Nav from "../nav";
import FAQ from "./components/faq";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Nav />
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-lg shadow-xl mt-8 mx-4 md:mx-24">
        <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center leading-tight">
          About Our Financial App
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
          Our app is designed to help you manage your finances with ease. Whether you're tracking expenses, monitoring savings, or planning for the future, our app offers a range of tools to keep you in control.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-6">
          We prioritize security, accessibility, and user-friendly interfaces to ensure you have the best experience possible.
        </p>
        <div className="text-center mt-8">
          <NavLink
            to="/home"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </NavLink>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default About;
