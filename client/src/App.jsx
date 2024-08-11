import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './pages/nav';
import About from './pages/about';
import Auth from './pages/authentication';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { AuthProvider, useAuth } from './contexts/auth';


const App = () => {
  
  const PrivateRoute = ({ children }) => {
    const { userLoggedIn,isverifyed} = useAuth();
    return isverifyed ? children : <Navigate to="/auth" />;
  };
  
  const AuthRoute = ({ children }) => {
    const { userLoggedIn,isverifyed } = useAuth();
    return isverifyed? <Navigate to="/home" /> : children;
  };

  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthRoute><LandingPage /></AuthRoute>} />
          <Route path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
};



export default App;
