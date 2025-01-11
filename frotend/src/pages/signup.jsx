import React, { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import image_1 from "../Assests/images/img-2.avif";

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Form Section */}
        <div className="md:w-1/2 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isLogin
              ? "Log in to continue exploring the amazing platform."
              : "Join us today to experience a seamless journey!"}
          </p>

          {/* Form */}
          <form className="space-y-5">
            {!isLogin && (
              <div className="relative">
                <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Your Full Name"
                />
              </div>
            )}
            <div className="relative">
              <FiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Email Address"
              />
            </div>
            <div className="relative">
              <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Password"
              />
            </div>
            {!isLogin && (
              <div className="relative">
                <FiLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  className="w-full pl-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
            )}
            {!isLogin && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 focus:ring-2 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms of Service
                  </a>.
                </label>
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="mt-5 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-blue-500 hover:underline focus:outline-none">
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>

        {/* Right Illustration Section */}
        <div className="relative md:w-1/2 bg-blue-50 flex items-center justify-center">
          <img
            src={image_1}
            alt="Signup Illustration"
            className="w-full max-w-full h-auto object-contain rounded-xl px-4"
          />
        </div>
      </div>
    </div>
  );
}
