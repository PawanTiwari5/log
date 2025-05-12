import React, { useState } from "react";

const orders = [
  { id: 816495, type: "Food", status: "In transit" },
  { id: 816403, type: "Groupage cargo", status: "No connection" },
  { id: 816953, type: "Construction materials", status: "In transit" },
  { id: 816531, type: "Flowers", status: "Idle timeout" },
  { id: 816845, type: "Groupage cargo", status: "In transit" },
];

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toString().includes(searchTerm) ||
      order.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-4">
        Active Orders ({filteredOrders.length})
      </h2>

      <input
        type="text"
        placeholder="Search by ID, type or status..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <div className="flex flex-col gap-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order.id}
              className="p-4 border rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">ID {order.id}</h3>
                <p className="text-gray-500">{order.type}</p>
              </div>
              <span className="text-sm font-semibold text-green-600">
                {order.status}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No matching orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
