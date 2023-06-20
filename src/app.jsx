import { Routes, Route } from "react-router-dom";
import Analytics from "./pages/analytics/analytics";
import Calendar from "./pages/calendar/calendar";
import Dashboard from "./pages/dashboard/dashboard";
import Invoice from "./pages/invoice/invoice";
import Messages from "./pages/messages/message";
import Product from "./pages/product/product";
import Notification from "./pages/notifications/notifications";
import Setting from "./pages/settings/settings";
import Register from "./components/Register";
import Login from "./components/Login";
import Attente from "./components/Attente";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";

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
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route path="/admin" element={<Analytics />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/product" element={<Product />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Setting />} />
          </Route>

          <Route
            element={<RequireAuth allowedRoles={[ROLES.SELLER]} />}
          ></Route>

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
