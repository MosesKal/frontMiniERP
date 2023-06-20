import Sidebar from "../../components/sidebar/sidebar";
import { SettingsNotifications } from "./settings-notifications.jsx";
import { SettingsPassword } from "./settings-password.jsx";

import "./Settings.scss";

export default function Setting() {
  return (
    <div className="settingPage">
      <div className="sideBar">
        <Sidebar />
      </div>

      <div className="setting">
        <h1 className="titleSetting">Settings</h1>
        <div className="notifications">
          <SettingsNotifications />
        </div>
        <div className="passwords">
          <SettingsPassword />
        </div>
      </div>
    </div>
  );
}
