import React from "react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="text-3xl text-green-500">{icon}</div>
      <div className="text-lg">
        <h3 className="font-semibold text-slate-700">{title}</h3>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
