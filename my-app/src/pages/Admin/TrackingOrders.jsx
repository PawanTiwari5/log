import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const OrderTracking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orders] = useState([
    {
      id: 1,
      orderNumber: "ORD12345",
      customer: "Priya Sharma",
      status: "In Transit",
      date: "2025-04-28",
    },
    {
      id: 2,
      orderNumber: "ORD12346",
      customer: "Ravi Kumar",
      status: "Delivered",
      date: "2025-04-25",
    },
  ]);

  const filteredOrders = orders.filter(
    (order) =>
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            📦 Order Tracking
          </h2>

          {/* Search + Order Table */}
          <div className="bg-white p-6 rounded-xl shadow-xl border">
            <input
              type="text"
              placeholder="🔍 Search by order number or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />

            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-300 text-left text-gray-700 uppercase text-xs">
                    <th className="p-3">Order Number</th>
                    <th className="p-3">Customer</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length ? (
                    filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="hover:bg-slate-100 transition cursor-pointer text-gray-800"
                      >
                        <td className="p-3 font-medium">{order.orderNumber}</td>
                        <td className="p-3">{order.customer}</td>
                        <td className="p-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="p-3">{order.date}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-4 text-center text-gray-500">
                        No orders found.
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

export default OrderTracking;
