import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/vendor/calendar/calendar";
import Invoice from "./pages/vendor/invoice/invoice";
import Product from "./pages/vendor/product/product";
import Notification from "./pages/admin/notifications/notifications";
import Register from "./components/Register";
import Login from "./components/Login";
import Attente from "./components/Attente";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import Client from "./pages/vendor/client/client";
import Profile from "./pages/vendor/profile/profile";
import Analytics from "./pages/mining/analytics/analytics";
import SettingMining from "./pages/mining/settings-mining/settings";
import SettingAdmin from "./pages/admin/settings-admin/settings";
import MessageAdmin from "./pages/admin/message-admin/message";
import MessageMining from "./pages/mining/messages-mining/message";
import DashboardAdmin from "./pages/admin/dashboard-admin/dashboard";
import DashboardMining from "./pages/mining/dashboard-mining/dashboard";
import DemandeCotation from "./pages/mining/demandeCotation/dc";
import DashboardSeller from "./pages/vendor/dashboard-seller/dashboard";
import NotificationSeller from "./pages/vendor/notification-seller/notifications";
import SettingVendor from "./pages/vendor/settings-vendor/settings";
import MessageVendor from "./pages/vendor/message-seller/message";

const ROLES = {
  MINING: "mining",
  SELLER: "seller",
  ADMIN: "admin",
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="unauthorized" element={<Unauthorized />} /> */}
          <Route path="/attente" element={<Attente />} />

          {/* we want to protect these routes  */}
          <Route element={<RequireAuth allowedRoles={[ROLES.MINING]} />}>
            {/* <Route path="/mining" element={<DashboardMining />} /> */}
            <Route path="/mining" element={<DashboardMining />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dc" element={<DemandeCotation />} />
            <Route path="/message-mining" element={<MessageMining />} />
            <Route path="/settings-mining" element={<SettingMining />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<DashboardAdmin />} />
            <Route path="/message-admin" element={<MessageAdmin />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings-admin" element={<SettingAdmin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.SELLER]} />}>
            <Route path="/seller" element={<DashboardSeller />} />
            <Route path="/product" element={<Product />} />
            <Route path="/client" element={<Client />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/message-seller" element={<MessageVendor />} />
            <Route
              path="/notification-seller"
              element={<NotificationSeller />}
            />
            <Route path="/settings-vendor" element={<SettingVendor />} />
          </Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
