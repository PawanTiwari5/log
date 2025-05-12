import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTruck,
  FaUserFriends,
  FaHistory,
  FaClipboardList,
  FaMoneyBill,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    {
      path: "/driver-details",
      label: "Driver Details",
      icon: <FaUserFriends />,
    },
    {
      path: "/tracking-orders",
      label: "Tracking Orders",
      icon: <FaMapMarkerAlt />,
    },
    {
      path: "/customer-details",
      label: "Customer Details",
      icon: <FaClipboardList />,
    },
    { path: "/order-history", label: "Orders History", icon: <FaHistory /> },
    { path: "/truck-management", label: "Truck Management", icon: <FaTruck /> },
    {
      path: "/billing-details",
      label: "Billing Details",
      icon: <FaMoneyBill />,
    },
  ];

  return (
    <div
      className="w-64 bg-gray-800 text-white px-6 py-8 rounded-r-3xl shadow-lg flex-col justify-between
     min-h-screen transition-all duration-300 hidden md:block"
    >
      {/* Logo */}
      <div className="text-center mb-10">
        <div className="bg-green-600 text-white py-3 px-6 rounded-full shadow-lg inline-block">
          <h1 className="text-2xl font-bold tracking-wide">DotSquare</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors
              ${isActive ? "bg-green-500 text-white" : "hover:bg-gray-700"}`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer or Version */}
      <div className="text-center text-gray-400 text-xs p-4 ">
        © 2025 DotSquare
      </div>
    </div>
  );
};

export default Sidebar;
