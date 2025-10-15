import React, { useState } from "react";
import axios from "axios";
import Bg from "../images/Bg.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example backend request (replace URL with your API endpoint)
      const res = await axios.post("https://your-backend.com/api/forgot-password", { email });
      setMessage("Password reset link sent to your email.");
    } catch (error) {
      setMessage("Error sending reset link. Please try again.");
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className=" rounded-xl px-8 py-10 w-full max-w-md text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#101828] mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-600 font-medium mb-6">
          No worries, we’ll send you reset instructions
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#11860F]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#11860F] text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Reset Password
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="text-sm text-gray-600 mt-3">{message}</p>
        )}

        {/* Back to login */}
        <div className="mt-6">
          <a
            href="/login"
            className="flex items-center justify-center font-medium text-[#475467] text-sm hover:underline"
          >
            ← Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
