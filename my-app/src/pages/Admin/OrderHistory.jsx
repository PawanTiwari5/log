import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const OrdersHistory = () => {
  const [orders] = useState([
    {
      id: 1,
      orderNumber: "ORD1001",
      customer: "Amit Shah",
      date: "2025-03-10",
      status: "Delivered",
    },
    {
      id: 2,
      orderNumber: "ORD1002",
      customer: "Neha Gupta",
      date: "2025-03-12",
      status: "Cancelled",
    },
    {
      id: 3,
      orderNumber: "ORD1003",
      customer: "Ravi Mehta",
      date: "2025-03-14",
      status: "Delivered",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-300">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            📦 Order History
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-md border">
            <div className="overflow-x-auto">
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="bg-slate-200 text-gray-700 uppercase text-xs">
                    <th className="p-3 text-left">Order #</th>
                    <th className="p-3 text-left">Customer</th>
                    <th className="p-3 text-left">Date</th>
                    <th className="p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="hover:bg-slate-100 transition text-gray-800"
                    >
                      <td className="p-3">{order.orderNumber}</td>
                      <td className="p-3">{order.customer}</td>
                      <td className="p-3">{order.date}</td>
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length === 0 && (
                <div className="text-center py-6 text-gray-500">
                  No order history found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersHistory;
