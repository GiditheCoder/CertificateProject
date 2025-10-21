import React, { useState } from "react";
import Baale from "../images/Baale.png";
import StateLogo from "../images/StateLogo.png";
import { Eye, EyeOff } from "lucide-react";

const OfficialRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#11860F] flex-col justify-center items-center text-white p-10">
        <img src={StateLogo} alt="Baale" className="w-56 h-auto mb-6 " />
        <h2 className="text-2xl font-semibold">Ogun State Government</h2>
        <p className="text-lg mt-2">L.G.A</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 sm:px-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <img src={StateLogo} alt="State Logo" className="w-14 h-14 mb-3" />
            <h3 className="text-gray-800 font-semibold text-lg">
              Ogun State Government
            </h3>
            <p className="text-sm text-gray-500 mt-1">Welcome Back</p>
            <p className="text-xs text-gray-500">
              Sign in to your L.G.A account
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* EMAIL FIELD */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="example@og.gov"
              />
            </div>

            {/* PASSWORD FIELD with Eye Icon */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-green-600"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-green-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember for 30 days
              </label>
              <a
                href="/forgotpassword"
                className="text-green-600 hover:underline"
              >
                Forgot password
              </a>
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#11860F] text-white py-2 rounded-md font-semibold hover:bg-[#0c670b] transition"
            >
              Sign in
            </button>
          </form>

       
        </div>
      </div>
    </div>
  );
};

export default OfficialRegister;
