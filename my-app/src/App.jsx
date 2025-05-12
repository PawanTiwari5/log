import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DriverDetails from "./pages/Admin/DriverDetails";
import CustomerDetails from "./pages/Admin/CustomerDetails";
import TruckManagement from "./pages/Admin/TruckManagement";
import OrderHistory from "./pages/Admin/OrderHistory";
import TrackingOrders from "./pages/Admin/TrackingOrders";
import BillingDetails from "./pages/Admin/BillingDetails";
import Settings from "./pages/Admin/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/driver-details" element={<DriverDetails />} />
      <Route path="/customer-details" element={<CustomerDetails />} />
      <Route path="/truck-management" element={<TruckManagement />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="/tracking-orders" element={<TrackingOrders />} />
      <Route path="/billing-details" element={<BillingDetails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
