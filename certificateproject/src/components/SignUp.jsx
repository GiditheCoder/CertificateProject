import React, { useState } from "react";
import axios from "axios";
import StateLogo from "../images/StateLogo.png";
import Bg from "../images/Bg.png";

const SignUp = () => {
  //  State to store user input
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔁 Update input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🚀 Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      return setMessage("Passwords do not match.");
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://lgacertificate-011d407b356b.herokuapp.com/api/v1/auth/signup",
        {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }
      );

      setMessage(res.data.message || "Signup successful!");
      console.log("✅ Response:", res.data);
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      setMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-lg shadow-md p-8">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center text-center mb-6">
          <img src={StateLogo} alt="State Logo" className="w-16 h-16 mb-3" />
          <h2 className="text-lg font-semibold text-gray-800">
            Ogun State Government
          </h2>
          <p className="text-sm text-gray-500">
            Fill in your details to create your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First, Middle, and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Middle Name
              </label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Michael"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number i.e 08123456789
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+234 001 002 2121"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
              required
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
          </div>

          <p className="text-xs text-gray-500">Must be at least 8 characters</p>

          {/* Status Message */}
          {message && (
            <p className="text-sm text-center mt-2 text-gray-700">{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#11860F] text-white py-3 rounded-md hover:bg-[#0c670b] transition-colors"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Get started"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-green-700 font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
