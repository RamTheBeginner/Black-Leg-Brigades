import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../config/auth'
import { useAuth } from '../contexts/auth'
const Login = () => {
  // State variables to store user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false)
  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if(!isSigningIn) {
        setIsSigningIn(true)
        let result =await doSignInWithEmailAndPassword(email, password);
        console.log(result);
        if(result)
      window.location.href = '/dashboard'; 
    else{
      setIsSigningIn(false);
    }
        // doSendEmailVerification()s
    }
    console.log('Logging in with:', email);
  };




  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundImage: "url('/konUtBV6RuyGBNJwURt5dQ.webp')", backgroundSize: "cover"}}>
      <div className="w-full max-w-lg bg-slate-300 bg-opacity-90 shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">Login</button>
        </form>
        <div className="text-center mt-4">
          {/* Signup link/button */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>

        </div>
      </div>
    </div>
  );
};

export default Login;
