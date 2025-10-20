import React, { useState } from "react";
import axios from "axios";
import Bg from "../images/Bg.png";
import { Eye, EyeOff } from "lucide-react"; // 👈 Lucide icons

const ResetPassword = () => {
  const [codeArray, setCodeArray] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleInputChange = (e, index) => {
    const value = e.target.value.slice(-1);
    const newCode = [...codeArray];
    newCode[index] = value;
    setCodeArray(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (codeArray[index] === "" && index > 0) {
        const prevInput = document.getElementById(`code-input-${index - 1}`);
        if (prevInput) prevInput.focus();
      }

      const newCode = [...codeArray];
      newCode[index] = "";
      setCodeArray(newCode);
    }
  };

  const handleResetPassword = async () => {
    const otp = codeArray.join("");
    const newErrors = {};

    // Validation
    if (!email) newErrors.email = "Email is required.";
    if (!otp || otp.length < 6) newErrors.otp = "OTP code must be 6 digits.";
    if (!newPassword) newErrors.newPassword = "New password is required.";
    else if (newPassword.length < 8)
      newErrors.newPassword = "Password must be at least 8 characters.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (newPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://lgacertificate-011d407b356b.herokuapp.com/api/reset-password",
        {
          email,
          otp,
          password: newPassword,
          confirmPassword,
        }
      );

      setMessage(response.data.message || "Password reset successful!");
      setErrors({});
      setEmail("");
      setCodeArray(["", "", "", "", "", ""]);
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage(
        error.response?.data?.message || "Failed to reset password. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
          Set a New Password
        </h1>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-4 border rounded-lg text-black placeholder-gray-400 
              focus:border-green-600 focus:outline-none 
              ${errors.email ? "border-red-500" : "border-[#3c3c51]"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* OTP Inputs */}
        <div className="flex space-x-2 sm:space-x-3 md:space-x-4 mb-2 justify-center">
          {codeArray.map((char, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              value={char}
              onChange={(e) => handleInputChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className={`w-10 h-10 mb-3 sm:w-12 sm:h-12 md:w-14 md:h-14 text-black text-lg sm:text-xl text-center rounded-md bg-transparent border 
                focus:outline-none focus:border-green-600 transition flex-shrink-0 
                ${errors.otp ? "border-red-500" : "border-[#3c3c51]"}`}
            />
          ))}
        </div>
        {errors.otp && (
          <p className="text-red-500 text-sm text-center">{errors.otp}</p>
        )}

        {/* New Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`w-full px-4 py-4 border rounded-lg text-black placeholder-gray-400 pr-12 
              focus:border-green-600 focus:outline-none 
              ${errors.newPassword ? "border-red-500" : "border-[#3c3c51]"}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-4 py-4 border rounded-lg text-black placeholder-gray-400 pr-12 
              focus:border-green-600 focus:outline-none 
              ${errors.confirmPassword ? "border-red-500" : "border-[#3c3c51]"}`}
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* API Message */}
        {message && (
          <p
            className={`text-center text-sm ${
              message.toLowerCase().includes("success")
                ? "text-green-400"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full bg-[#11860F] text-white font-semibold py-4 rounded-lg hover:bg-[#0c670b] transition"
        >
          {loading ? "Resetting..." : "Set New Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
