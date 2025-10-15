import React from "react";
import { Settings, Bell } from "lucide-react";
import StateLogo from "../images/StateLogo.png";
import box from "../images/box.png";
import blob from "../images/blob.png";
import Bg from '../images/Bg.png';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();

    const handleNewApplication = () => {
    navigate("/application");
  };
  
  return (
 
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img src={StateLogo} alt="State Logo" className="w-10 h-10" />
          <h1 className="text-lg font-semibold text-[#475467]">
            Ogun State Government
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
          <Settings className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold">
            JD
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-10 py-8 space-y-10">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Welcome back, John
          </h2>
          <p className="text-gray-500 font-medium">
            Manage your certificate applications and track their progress
          </p>
        </div>

      {/* Start New Application */}
<div className="relative rounded-xl p-8 shadow-lg overflow-hidden">
  {/* Background image */}
  <img
    src={Bg}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-100" // make Bg more visible
  />

  {/* Optional pattern overlay (blob) */}
  <img
    src={blob}
    alt="Pattern"
    className="absolute right-0 top-0 w-full h-full object-cover opacity-20 pointer-events-none"
  />

  {/* Content */}
  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
    <div>
      <h3 className="text-3xl font-semibold mb-4 text-black drop-shadow-md">
        Start a New Application
      </h3>
        <button className="bg-[#11860F] text-white px-5 py-2 rounded-md font-medium hover:bg-green-700 transition"
        onClick={handleNewApplication}>
      New Application
    </button>
    </div>
  
  </div>


</div>


        {/* Tabs Section */}
       {/* Tabs Section */}
<div className="bg-white border border-gray-200 rounded-xl shadow-sm">
  {/* Tabs Header */}
  <div className="flex border-b border-gray-200">
    <button 
      className="px-6 py-3 text-m font-bold text-black border-b-2 border-[#11860F] transition-colors"
    >
      Pending
    </button>
    <button 
      className="px-6 py-3 text-m font-bold text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors"
    >
      Approved
    </button>
  </div>

  {/* Pending Content */}
  <div className="flex flex-col items-center justify-center py-14 px-4 text-center space-y-4">
    <div className="relative">
      <img
        src={blob}
        alt="Blob background"
        className="absolute top-0 left-0 w-48 h-32 opacity-100"
      />
      <img
        src={box}
        alt="Box illustration"
        className="relative z-10 w-28 h-28 mx-auto"
      />
    </div>

    <h3 className="text-xl font-bold text-gray-900">
      No pending applications
    </h3>
    <p className="text-gray-600 text-base font-medium">
      Once you start an application you can track the progress here
    </p>
    <button className="bg-[#E3F2E7] hover:bg-[#d4ead9] text-[#11860F] px-6 py-2.5 rounded-lg font-semibold transition-colors"
    onClick={handleNewApplication}>
      Start New Application
    </button>
  </div>
</div>
        
      </main>
    </div>
  );
};

export default Dashboard;
