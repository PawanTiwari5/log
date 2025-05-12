const RecentActivity = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 h-full">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Driver Rahul accepted Order #1236</li>
        <li>Order #1234 delivered successfully</li>
        <li>Customer feedback received for Order #1232</li>
      </ul>
    </div>
  );
};

export default RecentActivity;
