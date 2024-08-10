import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./pages/nav";
import About from "./pages/about";
import Auth from "./pages/auth";
const App = () => {
  return (
    <Router>
      <Nav />
      <LandingPage/>
      <Routes>
        <Route path="/" element={<Auth />} />
        {/*<Route path="/profile" element={<Profile />} />*/}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
