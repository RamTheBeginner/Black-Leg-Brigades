import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './pages/nav';
import About from './pages/about';
import Auth from './pages/authentication';
import Home from './pages/home'; // Ensure you have this component
import { AuthProvider, useAuth } from './contexts/auth';

const App = () => {
  const PrivateRoute = ({ children }) => {
    const { userLoggedIn } = useAuth();
    return userLoggedIn ? children : <Navigate to="/authentication" />;
  };

  const AuthRoute = ({ children }) => {
    const { userLoggedIn } = useAuth();
    return userLoggedIn ? <Navigate to="/home" /> : children;
  };

  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Routes>
          {/* Auth page or Home page based on login status */}
          <Route path="/" element={<AuthRoute><Auth /></AuthRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
