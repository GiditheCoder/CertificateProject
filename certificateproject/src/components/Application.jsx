import React, { useState } from 'react';
import { ArrowLeft, Settings, Bell, Upload } from 'lucide-react';
import Bg from '../images/Bg.png';
import StateLogo from "../images/StateLogo.png";
import { useNavigate } from 'react-router-dom';

const Application = () => {
  const [applicationType, setApplicationType] = useState('myself');
  const [formData, setFormData] = useState({
    certificateType: '',
    fullName: '',
    placeOfBirth: '',
    gender: '',
    dateOfBirth: '',
    purpose: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={StateLogo} alt="State Logo" className="w-10 h-10" />
            <h1 className="text-lg font-semibold text-gray-800">Ogun State Government</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-600">JD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
  {/* Back Button */}
        <button className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-900 mt-6 ml-6 transition-colors"
        onClick={handleDashboard}>
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back</span>
        </button>


      <div className="max-w-2xl mx-auto px-4 py-8">
    
        {/* Form Container */}
        <div className=" p-6 sm:p-8">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Apply for Certificate</h2>
            <p className="text-gray-600 text-sm">Complete the form below to submit your certificate application</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Radio Buttons */}
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="applicationType"
                  value="myself"
                  checked={applicationType === 'myself'}
                  onChange={(e) => setApplicationType(e.target.value)}
                  className="w-4 h-4 text-green-600 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-green-700">For Myself</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="applicationType"
                  value="child"
                  checked={applicationType === 'child'}
                  onChange={(e) => setApplicationType(e.target.value)}
                  className="w-4 h-4 text-gray-400 focus:ring-gray-300"
                />
                <span className="text-sm font-medium text-gray-600">For My Child</span>
              </label>
            </div>

            {/* Certificate Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Certificate Type
              </label>
              <select
                name="certificateType"
                value={formData.certificateType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
              >
                <option value="">Select certificate type</option>
                <option value="birth">Birth Certificate</option>
                <option value="origin">Certificate of Origin</option>
                <option value="residence">Certificate of Residence</option>
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name (as on NIN)
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Oluwadare Doe"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Place of Birth */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Place of Birth
              </label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleInputChange}
                placeholder="Abeokuta"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Gender and Date of Birth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
            

              <div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Date of Birth
  </label>
  <input
  type="text"
  name="dateOfBirth"
  value={formData.dateOfBirth}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5, 7);
    handleInputChange({
      target: { name: "dateOfBirth", value: value.slice(0, 8) },
    });
  }}
  placeholder="dd/mm/yy"
  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
  inputMode="numeric"
/>

</div>


            </div>

            {/* File Upload */}
            <div>
              <div className="border-2 border-dashed border-gray-300 bg-transparent rounded-lg p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="text-green-600 font-medium">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose of Certificate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Purpose of Certificate
              </label>
              <textarea
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Briefly explain why you need this certificate (e.g., school application, visa application, etc.)"
                rows="4"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>



      
    </div>
  );
};

export default Application;
