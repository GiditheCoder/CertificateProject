import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import Dashboard from './components/Dashboard'
import Application from './components/Application'
import Successful from './components/Successful'
import ResetPassword from './components/ResetPassword'
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Signup page */}
        <Route path="/signup" element={<SignUp />} />
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        {/* Forgot Password */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Application page */}
        <Route path="/application" element={<Application />} />
        {/* Successful payment page */}
        <Route path="/successful" element={<Successful />} />
         {/* Reset Password */}
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App
