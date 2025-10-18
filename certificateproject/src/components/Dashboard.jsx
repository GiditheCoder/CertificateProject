import React, { useEffect, useState } from "react";
import { Settings, Bell, LogOutIcon } from "lucide-react";
import StateLogo from "../images/StateLogo.png";
import box from "../images/box.png";
import blob from "../images/blob.png";
import Bg from "../images/Bg.png";
import { useNavigate } from "react-router-dom";
import MenuLogo from "../images/menu.png";
import CloseLogo from "../images/close.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Get user data from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleNewApplication = () => {
    navigate("/application");
  };

   // ✅ Proper logout function
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <header className="flex items-center justify-between px-6 sm:px-8 py-4 bg-white shadow-sm relative">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img src={StateLogo} alt="State Logo" className="w-10 h-10" />
          <h1 className="text-base sm:text-lg font-semibold text-[#475467]">
            Ogun State Government
          </h1>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
          <LogOutIcon onClick={handleLogout} className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold uppercase">
            {user
              ? `${user.firstName?.charAt(0).toUpperCase()}${user.lastName?.charAt(0).toUpperCase()}`
              : "?"}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={menuOpen ? CloseLogo : MenuLogo}
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 bg-white border border-gray-200 rounded-lg shadow-lg mt-2 p-4 flex flex-col items-center gap-4 w-40 z-50 md:hidden animate-fadeIn">
            <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
            <LogOutIcon onClick={handleLogout} className="w-5 h-5 text-gray-600 cursor-pointer hover:text-[#11860F]" />
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-semibold uppercase">
              {user
                ? `${user.firstName?.charAt(0).toUpperCase()}${user.lastName?.charAt(0).toUpperCase()}`
                : "?"}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="px-5 sm:px-10 py-8 space-y-10">
        {/* Welcome Section */}
        <div>
          <h2 className="text-xl sm:text-2xl text-center md:text-left font-semibold text-gray-900">
  Welcome back, {user ? user.firstName : "User"}!
</h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base text-center md:text-left">
  Manage your certificate applications and track their progress
</p>

        </div>

        {/* Start New Application */}
        <div className="relative rounded-xl p-6 sm:p-8 shadow-lg overflow-hidden">
          {/* Background */}
          <img
            src={Bg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
          />
          <img
            src={blob}
            alt="Pattern"
            className="absolute right-0 top-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">

            <h3 className="text-2xl sm:text-3xl font-semibold text-black drop-shadow-md text-center md:text-left">
  Start a New Application
</h3>
            <button
  className="bg-[#11860F] text-white px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-md font-medium hover:bg-green-700 transition w-full sm:w-auto"
  onClick={handleNewApplication}
>
  New Application
</button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="flex border-b border-gray-200 flex-wrap">
            <button className="px-4 sm:px-6 py-3 text-sm sm:text-base font-bold text-black border-b-2 border-[#11860F] transition-colors w-1/2 sm:w-auto text-center">
              Pending
            </button>
            <button className="px-4 sm:px-6 py-3 text-sm sm:text-base font-bold text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300 transition-colors w-1/2 sm:w-auto text-center">
              Approved
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-10 sm:py-14 px-4 text-center space-y-4">
            <div className="relative">
              <img
                src={blob}
                alt="Blob background"
                className="absolute top-0 left-0 w-32 sm:w-48 h-24 sm:h-32 opacity-100"
              />
              <img
                src={box}
                alt="Box illustration"
                className="relative z-10 w-20 sm:w-28 h-20 sm:h-28 mx-auto"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              No pending applications
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              Once you start an application you can track the progress here
            </p>
            <button
              className="bg-[#E3F2E7] hover:bg-[#d4ead9] text-[#11860F] px-5 sm:px-6 py-2.5 rounded-lg font-semibold transition-colors"
              onClick={handleNewApplication}
            >
              Start New Application
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

