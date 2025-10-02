import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
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
      </Routes>
    </Router>
  )
}

export default App
