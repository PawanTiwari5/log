import React from "react";
import { NavLink } from "react-router-dom";

const DriverSidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed z-40 w-64 h-screen bg-slate-800 text-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-green-400 mb-6">
        Driver Panel
      </h2>
      <NavLink
        to="/driver/available-orders"
        onClick={toggleSidebar}
        className="block mb-4 hover:text-green-400"
      >
        Available Orders
      </NavLink>
      <NavLink
        to="/driver/my-orders"
        onClick={toggleSidebar}
        className="block mb-4 hover:text-green-400"
      >
        My Orders
      </NavLink>
      <NavLink
        to="/driver/earnings"
        onClick={toggleSidebar}
        className="block hover:text-green-400"
      >
        My Earnings
      </NavLink>
    </div>
  );
};

export default DriverSidebar;
