import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OrderList from "../components/OrderList";
import StatsCard from "../components/StatsCard";
import RecentActivity from "../components/RecentActivity";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-200">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 bg-white flex-1 rounded-3xl shadow-xl mt-6 mx-4 space-y-8">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Welcome to the Dashboard!
          </h2>
          <p className="text-lg text-slate-600 mb-6">
            This is your main content area. Here you can manage orders, view
            analytics, and more.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard title="Total Orders" value="1,230" icon="📦" />
            <StatsCard title="Pending Deliveries" value="78" icon="⏳" />
            <StatsCard title="Active Drivers" value="45" icon="🚚" />
          </div>

          {/* Order List and Recent Activity Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="col-span-1 lg:col-span-1">
              <OrderList />
            </div>
            <div className="col-span-1 lg:col-span-1">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
