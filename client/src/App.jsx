import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./pages/nav";
import Home from "./pages/home";
import About from "./pages/about";
import LandingPage from "./pages/landing";
const App = () => {
  return (
    <Router>
      <Nav />
      <LandingPage/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/profile" element={<Profile />} />*/}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
