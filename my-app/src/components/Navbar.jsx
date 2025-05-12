import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Toggle `dark` class on body or root element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow-sm flex justify-between items-center
     rounded-3xl transition-colors sm:px-4 md:px-6 lg:px-8"
    >
      <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
        Hello Bhaila
      </h1>

      <div className="flex items-center gap-6">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full shadow transition-colors"
          title="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="text-sm text-gray-700 dark:text-white">
              Naru Gangster
            </span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="rounded-full w-8 h-8"
            />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Logout
              </button>
              <button
                onClick={handleSettings}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
