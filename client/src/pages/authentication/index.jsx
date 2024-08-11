import React, { useState } from "react";
import { toast } from "sonner";
import Login from "./components/login";
import SignUp from "./components/singup";
import { resetpassword } from "@/config/auth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [view, setView] = useState("login");
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    toast.loading("Processing your request...");
    try {
      await resetpassword(email);
      toast.dismiss();
      toast.success("Password reset email sent!");
      setEmailSent(true);
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send password reset email.");
    }
  };

  return (
    <>
      <div>
        <div>
          <Button
            className="bg-yellow-500 p-6 mt-4 ml-5"
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </div>
        <div
          className="flex items-center justify-center min-h-screen"
          style={{
            backgroundImage: "url('/background.webp')",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full max-w-lg bg-slate-300 bg-opacity-90 shadow-md rounded px-8 py-6">
            {view === "login" && (
              <>
                <Login setView={setView} />
                <div className="text-center mt-4">
                  <p
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setView("signup")}
                  >
                    Don't have an account? Sign Up
                  </p>
                  <p
                    className="text-blue-500 cursor-pointer mt-2"
                    onClick={() => setView("reset")}
                  >
                    Forgot your password? Reset Password
                  </p>
                </div>
              </>
            )}
            {view === "signup" && (
              <>
                <SignUp setView={setView} />
                <div className="text-center mt-4">
                  <p
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setView("login")}
                  >
                    Already have an account? Login
                  </p>
                </div>
              </>
            )}
            {view === "reset" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-center">
                  Reset Password
                </h2>
                <form onSubmit={handleReset} className="space-y-4">
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
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
                  >
                    Send Reset Link
                  </button>
                </form>
                {emailSent && (
                  <div className="text-center mt-4">
                    <p className="text-purple-900 mb-4">
                      We've sent a link to change your password to your email.
                      Please click on that link to reset the password.
                    </p>
                    <button
                      onClick={() => setView("login")}
                      className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
                    >
                      Back to Login
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
