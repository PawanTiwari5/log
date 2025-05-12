import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const CustomerDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      phone: "9876543210",
      email: "priya@example.com",
    },
    {
      id: 2,
      name: "Ravi Kumar",
      phone: "9123456789",
      email: "ravi@example.com",
    },
  ]);

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phone.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            👥 Customer Details
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <input
              type="text"
              placeholder="🔍 Search by name or phone..."
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
                    <th className="p-3">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.length ? (
                    filteredCustomers.map((customer) => (
                      <tr
                        key={customer.id}
                        className="hover:bg-slate-100 transition cursor-pointer text-gray-800"
                      >
                        <td className="p-3 font-medium">{customer.id}</td>
                        <td className="p-3">{customer.name}</td>
                        <td className="p-3">{customer.phone}</td>
                        <td className="p-3 text-sm text-slate-600">
                          {customer.email}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">
                        No customers found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
