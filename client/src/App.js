import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Investment from './components/Investment';
import { AuthProvider } from "./contexts/auth";
function App() {
 
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/investment" element={<Investment />} />
        </Routes>
    </Router>
    </AuthProvider>
    </>
    
  );
}

export default App;
