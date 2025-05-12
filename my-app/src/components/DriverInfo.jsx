import React from "react";

const DriverInfo = () => {
  return (
    <div className="p-6 bg-white rounded shadow mt-4">
      <h3 className="text-xl font-bold mb-4">Driver Information</h3>
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Driver"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h4 className="font-semibold">Philip Osborne</h4>
          <p className="text-gray-500 text-sm">Driver</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div>Experience: 12 years</div>
        <div>License: CDL</div>
        <div>ID Number: 2415-63-7867</div>
        <div>Insurance: 987-34-2415</div>
      </div>
      <div className="flex gap-4 mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Call
        </button>
        <button className="border px-4 py-2 rounded">Chat</button>
      </div>
    </div>
  );
};

export default DriverInfo;
