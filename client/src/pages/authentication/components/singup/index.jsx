import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../../../config/auth";
import { SIGNUP_ROUTE } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";

const SignUp = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

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
            await apiClient.post(SIGNUP_ROUTE, {
              email: email,
              token: result.user.uid,
            });
            toast.success("Registered successfully!");
          }
        }, 1000);
      } catch (error) {
        toast.dismiss();
        toast.error(error.message);
        setIsRegistering(false);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSignUp}>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Please Enter a Valid E-mail"
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
            placeholder="Password Should be atleast 6 characters"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
