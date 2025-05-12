import React, { useState } from "react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DriverNavbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow w-full px-6 py-4">
      {/* Sidebar Toggle */}
      <button onClick={toggleSidebar} className="text-slate-700 md:hidden">
        <Bars3Icon className="h-6 w-6" />
      </button>

      {/* Title */}
      <h1 className="text-xl font-semibold text-green-600">Driver Dashboard</h1>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={handleDropdownToggle}
          className="flex items-center space-x-2"
        >
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Driver"
            className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
          />
          <ChevronDownIcon className="h-5 w-5 text-gray-600" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-10">
            <Link
              to="/driver/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View Profile
            </Link>
            <Link
              to="/driver/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("authToken");
                window.location.href = "/login";
              }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverNavbar;
