import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const DriverDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drivers, setDrivers] = useState([
    { id: 1, name: "Raj Singh", phone: "9876543210", truckNo: "MH12AB1234" },
    { id: 2, name: "Aman Verma", phone: "9123456789", truckNo: "DL10CD5678" },
  ]);
  const [newDriver, setNewDriver] = useState({
    name: "",
    phone: "",
    truckNo: "",
  });
  const [selectedDriver, setSelectedDriver] = useState(null);

  const filteredDrivers = drivers.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.truckNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDriver = () => {
    if (!newDriver.name || !newDriver.phone || !newDriver.truckNo) return;
    const id = drivers.length + 1;
    setDrivers([...drivers, { id, ...newDriver }]);
    setNewDriver({ name: "", phone: "", truckNo: "" });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            🚚 Driver Details
          </h2>

          {/* Add Driver Form */}
          <div className="bg-white p-6 rounded-xl shadow-xl space-y-4 border">
            <h3 className="text-xl font-semibold text-slate-700">
              ➕ Add New Driver
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newDriver.name}
                onChange={(e) =>
                  setNewDriver({ ...newDriver, name: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={newDriver.phone}
                onChange={(e) =>
                  setNewDriver({ ...newDriver, phone: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
              <input
                type="text"
                placeholder="Truck Number"
                value={newDriver.truckNo}
                onChange={(e) =>
                  setNewDriver({ ...newDriver, truckNo: e.target.value })
                }
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>
            <button
              onClick={handleAddDriver}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              Add Driver
            </button>
          </div>

          {/* Search + Driver List */}
          <div className="bg-white p-6 rounded-xl shadow-xl border">
            <input
              type="text"
              placeholder="🔍 Search by name or truck number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-300 text-left text-gray-700 uppercase text-xs">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Truck Number</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDrivers.length ? (
                    filteredDrivers.map((driver) => (
                      <tr
                        key={driver.id}
                        className="hover:bg-slate-100 cursor-pointer transition"
                        onClick={() => setSelectedDriver(driver)}
                      >
                        <td className="p-3">{driver.id}</td>
                        <td className="p-3">{driver.name}</td>
                        <td className="p-3">{driver.phone}</td>
                        <td className="p-3">{driver.truckNo}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">
                        No drivers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDriver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setSelectedDriver(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              👤 Driver Info
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Name:</strong> {selectedDriver.name}
              </p>
              <p>
                <strong>Phone:</strong> {selectedDriver.phone}
              </p>
              <p>
                <strong>Truck Number:</strong> {selectedDriver.truckNo}
              </p>
              <hr className="my-3" />
              <p>
                <strong>License No:</strong> DL123456789
              </p>
              <p>
                <strong>Address:</strong> 123 Transport Lane, Mumbai
              </p>
              <p>
                <strong>Status:</strong> ✅ Active
              </p>
              <p>
                <strong>Experience:</strong> 5 years
              </p>
              <p>
                <strong>Assigned Orders:</strong> 3
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverDetails;
