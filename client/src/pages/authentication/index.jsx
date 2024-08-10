import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doCreateUserWithEmailAndPassword
} from "../../config/auth";
import { SIGNUP_ROUTE } from "../../utils/constants";
import { useAuth } from "../../contexts/auth";
import { apiClient } from "@/lib/api-client";
import { toast } from 'sonner'; // Import toast from sonner

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      toast.loading("Signing in...");
      try {
        let result = await doSignInWithEmailAndPassword(email, password);
        toast.dismiss();
        console.log(result)
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.log(error)
        toast.dismiss();
        toast.error("Incorrect credentials. Please try again.");
        setIsSigningIn(false);
      }
     
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      toast.loading("Registering...");

      try {

        let result = await doCreateUserWithEmailAndPassword(email, password);

      setTimeout(async () => {
        toast.dismiss();

        if (result) {
          const response = await apiClient.post(SIGNUP_ROUTE, {
            email: email,
            token: result.user.uid,
          });
          toast.success("Registered successfully!");
          console.log(response);
          navigate("/dashboard");
        } 
      }, 1000);
        
      } catch (error) {
        toast.dismiss();
        console.log(error.message)
        toast.error(error.message);
          setIsRegistering(false);
        
      }
     
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('/konUtBV6RuyGBNJwURt5dQ.webp')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-lg bg-slate-300 bg-opacity-90 shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
            onClick={handleSignUp}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
