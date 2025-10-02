import React from 'react' 
import StateLogo from "../images/StateLogo.png"
import Bg from '../images/Bg.png';

const SignUp = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-lg shadow-md p-8">
        {/* Logo + Heading */}
        <div className="flex flex-col items-center text-center mb-6">
          <img src={StateLogo} alt="State Logo" className="w-16 h-16 mb-3" />
          <h2 className="text-lg font-semibold text-gray-800">Ogun State Government</h2>
          <p className="text-sm text-gray-500">Fill in your details to create your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input 
                type="text" 
                placeholder="John" 
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input 
                type="text" 
                placeholder="Doe" 
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
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
              placeholder="johndoe@example.com" 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="+234 001 002 2121" 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* NIN */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              National Identification Number (NIN)
            </label>
            <input 
              type="text" 
              placeholder="00100123200" 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
            />
          </div>

          {/* State and LGA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600">
                <option>Select your state</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Local Government Area
              </label>
              <select className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-500 focus:outline-none focus:ring-1 focus:ring-green-600">
                <option>Select your LGA</option>
              </select>
            </div>
          </div>

          {/* Password + Confirm Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password" 
                placeholder="Create a strong password" 
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="Confirm password" 
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-green-600"
              />
            </div>
          </div>
          <p className="text-xs text-gray-500">Must be at least 8 characters</p>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-[#11860F] text-white py-3 rounded-md hover:bg-[#0c670b] transition-colors"
          >
            Get started
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account? <a href="/login" className="text-green-700 font-medium">Log in</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp