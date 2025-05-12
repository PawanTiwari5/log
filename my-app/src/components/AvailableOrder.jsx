import React from "react";
import DriverSidebar from "../components/Driver/DriverSidebar";
import DriverNavbar from "../components/Driver/DriverNavbar";

const AvailableOrders = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <DriverSidebar />

      <div className="flex-1 flex flex-col">
        <DriverNavbar />
        <h2>Available Orders</h2>
        {/* Your content for available orders */}
      </div>
    </div>
  );
};

export default AvailableOrders;
