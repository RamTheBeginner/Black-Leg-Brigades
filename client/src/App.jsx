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
import { Provider } from 'react-redux'
import store from './store/store';
import Yearly from './pages/dashboard/yearly';
import { LOGIN_ROUTE } from './utils/constants';
import { useSelector , useDispatch } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.value);

  
 // const {userInfo , setUserInfo} = useAppStore();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(async () =>{
  //      getUserData();

  //   },1000)

  // },[]);


  // const getUserData = async () => {
    
    
  //   try {
  //     const {isverifyed,currentUser} = useAuth();
  //     console.log(isverifyed,currentUser)
  //     if(isverifyed){
  //     const response = await apiClient.post(LOGIN_ROUTE,{
  //       email:currentUser.email,
  //       token: currentUser.uid
  //     });
  //     console.log({response});
      
  //     if(response.status === 200 && response.data.id){
  //       dispatch(userChange(response.data.user));
        
  //     }
  //   }

  //   }
  //   catch(error){
  //       console.log(error)
  //   }
  //   finally{
  //       setLoading(false);
  //   }
  // }
/*
  if(loading){
    return <div>Loading...</div>;
  }*/
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
          <Route path="*" element={<PrivateRoute><About /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
    
    </>
  );
};



export default App;
