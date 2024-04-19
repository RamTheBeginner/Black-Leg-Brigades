import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { useAuth } from '../contexts/auth'
import { doCreateUserWithEmailAndPassword } from '../../src/config/auth'
const SignUp = () => {
  // State variables to store user input
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistering, setIsRegistering] = useState(false)
  const { userLoggedIn } = useAuth();
  console.log(userLoggedIn);
  // Function to handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault(); 
   
    if(!isRegistering) {
      setIsRegistering(true)
      let result = await doCreateUserWithEmailAndPassword(email, password)
      if(result)
      window.location.href = '/dashboard'; 
  }
    console.log('Signing up with:', email, fullName, phoneNumber);
  };

  return (
    <div className="flex items-center justify-center h-screen" style={{backgroundImage: "url('/konUtBV6RuyGBNJwURt5dQ.webp')", backgroundSize: "cover"}}>
      <div className="w-full max-w-lg bg-slate-300 bg-opacity-90 shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {/* Sign Up form asking for email, password, full name, and phone number */}
        <form onSubmit={handleSignUp} className="space-y-4">
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
          <div>
            <label className="block mb-1">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone Number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <button type="submit" onClick={handleSignUp} className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
        <p className="mt-4 text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
