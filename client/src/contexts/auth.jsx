import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
// import { GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { apiClient } from "@/lib/api-client";
import { LOGIN_ROUTE } from "@/utils/constants";
import { useSelector , useDispatch } from "react-redux";
import { userChange } from "@/store/reducers/UserSlice";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isverifyed,setverifyed] = useState(true);
  const [users,setUsers] = useState(null);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
 // console.log(dispatch)
 useEffect(()=>{
  if(currentUser){
  dispatch(userChange(users));
  }
 },[users])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      
      setCurrentUser({ ...user });
      

      // check if provider is email and password login

      setIsEmailUser(user.email);

      setverifyed(user.emailVerified);

      // check if the auth provider is google or not
      //   const isGoogle = user.providerData.some(
      //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
      //   );
      //   setIsGoogleUser(isGoogle);
      let response = await apiClient.post(LOGIN_ROUTE, {
        email: user.email,
        token: user.uid,
      });

      let user1 = response.data.user;
      setUsers(user1);

     

      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
      setverifyed(false)
    }

    setLoading(false);
  }

  async function setprofile(params) {
    if(params){
      
      setUsers(params)
      
    }else{
      
      setUsers(null);
    }
    
  }

  const value = {
    userLoggedIn,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser,
    isverifyed,
    users,
    setprofile

  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
