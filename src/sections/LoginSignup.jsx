import React, { useState } from "react";

const LoginSignup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-2xl w-11/12 sm:w-4/5 md:w-1/2 lg:w-1/3 relative max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl font-bold hover:text-red-500 transition-colors duration-200"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          {isLogin ? "Login" : "Signup"}
        </h2>
        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="px-5 py-3 rounded-xl border focus:outline-none text-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-5 py-3 rounded-xl border focus:outline-none text-lg"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-5 py-3 rounded-xl border focus:outline-none text-lg"
            />
          )}

          <button
            type="submit"
            className="bg-themepurple hover:bg-themeyello text-white font-semibold py-3 rounded-xl text-lg transition-colors duration-300"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-base sm:text-lg mt-6 text-center text-gray-600 dark:text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-themepurple hover:underline cursor-pointer font-semibold"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
