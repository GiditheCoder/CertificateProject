import React from 'react'
import { Link } from 'react-router-dom'
import StateLogo from "../images/StateLogo.png"
import Bg from '../images/Bg.png';

const Login = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white w-full max-w-sm sm:max-w-md rounded-lg shadow-md p-6 sm:p-8">
        
        {/* Logo + Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <img src={StateLogo} alt="State Logo" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" />
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">Ogun State Government</h2>
          <p className="text-xs sm:text-sm text-gray-500">Welcome Back</p>
          <p className="text-xs sm:text-sm text-gray-500">Sign in to your LGA Certificate account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="johndoe@example.com" 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base w-full focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="border border-gray-300 rounded-md px-3 py-2 text-sm sm:text-base w-full focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-2">
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Remember for 30 days</span>
            </label>
            <a href="#" className="text-[#11860F] font-medium">Forgot password</a>
          </div>

          {/* Sign In Button */}
          <button 
            type="submit" 
            className="w-full bg-[#11860F] text-white py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-[#0c670b] transition-colors"
          >
            Sign in
          </button>

          {/* Create account link */}
          <p className="text-center text-xs sm:text-sm text-gray-500">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-green-700 font-medium">Create account</Link>
          </p>
        </form>

        {/* Back to home */}
        <div className="mt-6 flex justify-center">
          <Link to="/" className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-green-700">
            <span className="mr-2">←</span> Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
