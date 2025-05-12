import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const BillingDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bills] = useState([
    {
      id: 1,
      customer: "Priya Sharma",
      amount: 1500,
      date: "2025-04-25",
      status: "Paid",
    },
    {
      id: 2,
      customer: "Ravi Kumar",
      amount: 2200,
      date: "2025-04-28",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Aman Singh",
      amount: 1850,
      date: "2025-04-30",
      status: "Paid",
    },
  ]);

  const filteredBills = bills.filter((bill) =>
    bill.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-8 space-y-10">
          <h2 className="text-3xl font-bold text-slate-800">
            💳 Billing Details
          </h2>

          {/* Search Input */}
          <div className="bg-white p-4 rounded shadow">
            <input
              type="text"
              placeholder="Search by customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Billing Table */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Invoice History</h3>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-slate-200">
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Customer</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredBills.length ? (
                  filteredBills.map((bill) => (
                    <tr
                      key={bill.id}
                      className="text-center hover:bg-slate-100"
                    >
                      <td className="p-2 border">{bill.id}</td>
                      <td className="p-2 border">{bill.customer}</td>
                      <td className="p-2 border">₹{bill.amount}</td>
                      <td className="p-2 border">{bill.date}</td>
                      <td
                        className={`p-2 border font-semibold ${
                          bill.status === "Paid"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {bill.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No billing records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
