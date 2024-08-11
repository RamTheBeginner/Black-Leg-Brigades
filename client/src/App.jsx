import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './pages/nav';
import About from './pages/about';
import Auth from './pages/authentication';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { AuthProvider, useAuth } from './contexts/auth';

const AppRoutes = () => {
  const { userLoggedIn } = useAuth();

  const PrivateRoute = ({ children }) => {
    return userLoggedIn ? children : <Navigate to="/authentication" />;
  };

  const AuthRoute = ({ children }) => {
    return userLoggedIn ? <Navigate to="/home" /> : children;
  };

  return (
    <>
      {!userLoggedIn ? <LandingPage /> : <Nav />}
      <Routes>
        <Route path="/" element={<AuthRoute><Auth /></AuthRoute>} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
