import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const TruckDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [truckList, setTruckList] = useState([
    { id: 1, truckNo: "RJ21CA6781", company: "Hyundai", chasisNo: "12345" },
    { id: 2, truckNo: "RJ01SU9685", company: "Hero", chasisNo: "67890" },
  ]);
  const [newTruck, setNewTruck] = useState({
    truckNo: "",
    company: "",
    chasisNo: "",
  });
  const [selectedTruck, setSelectedTruck] = useState(null);

  const filteredTrucks = truckList.filter(
    (t) =>
      t.truckNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.chasisNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTruck = () => {
    if (!newTruck.truckNo || !newTruck.company || !newTruck.chasisNo) return;
    const id = truckList.length + 1;
    setTruckList([...truckList, { id, ...newTruck }]);
    setNewTruck({ truckNo: "", company: "", chasisNo: "" });
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            🚛 Truck Details
          </h2>

          {/* Add Truck Form */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold">Add New Truck</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Truck Number"
                value={newTruck.truckNo}
                onChange={(e) =>
                  setNewTruck({ ...newTruck, truckNo: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Company"
                value={newTruck.company}
                onChange={(e) =>
                  setNewTruck({ ...newTruck, company: e.target.value })
                }
                className="p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Chasis Number"
                value={newTruck.chasisNo}
                onChange={(e) =>
                  setNewTruck({ ...newTruck, chasisNo: e.target.value })
                }
                className="p-2 border rounded"
              />
            </div>
            <button
              onClick={handleAddTruck}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add Truck
            </button>
          </div>

          {/* Truck List Table */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Search by Truck No. or Chasis No."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-slate-200 text-left">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Truck Number</th>
                  <th className="p-2 border">Company</th>
                  <th className="p-2 border">Chasis No.</th>
                </tr>
              </thead>
              <tbody>
                {filteredTrucks.length ? (
                  filteredTrucks.map((truck) => (
                    <tr
                      key={truck.id}
                      className="text-center hover:bg-slate-100 cursor-pointer transition"
                      onClick={() => setSelectedTruck(truck)}
                    >
                      <td className="p-2 border">{truck.id}</td>
                      <td className="p-2 border">{truck.truckNo}</td>
                      <td className="p-2 border">{truck.company}</td>
                      <td className="p-2 border">{truck.chasisNo}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-4 text-center text-gray-500">
                      No trucks found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Selected Truck */}
      {selectedTruck && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setSelectedTruck(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Truck Details</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Truck No:</strong> {selectedTruck.truckNo}
              </p>
              <p>
                <strong>Company:</strong> {selectedTruck.company}
              </p>
              <p>
                <strong>Chasis No:</strong> {selectedTruck.chasisNo}
              </p>
              <hr className="my-3" />
              <p>
                <strong>License No:</strong> DL123456789
              </p>
              <p>
                <strong>Address:</strong> 123 Transport Lane, Mumbai
              </p>
              <p>
                <strong>Status:</strong> Active
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

export default TruckDetails;
