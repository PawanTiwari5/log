import React from "react";
import { NavLink } from "react-router-dom";

const OrderManagerSidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed z-40 w-64 h-screen bg-slate-800 text-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-green-400 mb-6">
        Order Manager Panel
      </h2>
      <NavLink
        to="/order-manager/orders"
        onClick={toggleSidebar}
        className="block mb-4 hover:text-green-400"
      >
        Orders
      </NavLink>
      <NavLink
        to="/order-manager/create-order"
        onClick={toggleSidebar}
        className="block mb-4 hover:text-green-400"
      >
        Create Order
      </NavLink>
      <NavLink
        to="/order-manager/statistics"
        onClick={toggleSidebar}
        className="block mb-4 hover:text-green-400"
      >
        Statistics
      </NavLink>
    </div>
  );
};

export default OrderManagerSidebar;
