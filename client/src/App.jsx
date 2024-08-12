import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './pages/nav';
import About from './pages/about';
import Auth from './pages/authentication';
import Home from './pages/home';
import LandingPage from './pages/landing';
import { AuthProvider, useAuth } from './contexts/auth';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import { useAppStore } from './store';


const App = () => {
  const {userInfo , setUserInfo} = useAppStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await apiClient.get(GET_USER_INFO);
        console.log({response});
        if(response.status === 200 && response.data.id){
          setUserInfo(response.data)
        }
        else{
          setUserInfo(undefined)
        }
      }
      catch(error){
          setUserInfo(undefined)
      }
      finally{
          setLoading(false);
      }
    }
    if(!userInfo){
      getUserData();
    }
    else{
      setLoading(false);
    }
  },[userInfo , setUserInfo]);

  if(loading){
    return <div>Loading...</div>;
  }
  const PrivateRoute = ({ children }) => {
    const {isverifyed} = useAuth();
    return isverifyed ? children : <Navigate to="/auth" />;
  };
  
  const AuthRoute = ({ children }) => {
    const { isverifyed } = useAuth();
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
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
};



export default App;
