import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSendEmailVerification,
} from "../../../../config/auth";
import { toast } from "sonner";
import { LOGIN_ROUTE } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { useAuth } from "@/contexts/auth";

const Login = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const navigate = useNavigate();
  const { setUserInfo } = useAuth(); // Assuming this is the correct function

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      toast.loading("Signing in...");
      try {
        let result = await doSignInWithEmailAndPassword(email, password);
        if (result.user.emailVerified) {
          let response = await apiClient.post(LOGIN_ROUTE, {
            email: email,
            token: result.user.uid,
          });

          if (response.data.user) {
            try {
              console.log("Setting user info:", response.data.user);
              setUserInfo(response.data.user); // Ensure this matches your slice method
            } catch (error) {
              console.log("Error setting user info:", error);
            }

            if (response.data.user.profileSetup) {
              navigate("/home");
            } else {
              navigate("/profile");
            }
          }
          toast.dismiss();
          toast.success("Logged in successfully!");
        } else {
          doSendEmailVerification();
          toast.dismiss();
          toast.success("Please verify your email");

          setIsSigningIn(false);
        }
      } catch (error) {
        toast.dismiss();
        toast.error("Incorrect credentials. Please try again.");
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
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
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
