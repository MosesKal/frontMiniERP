import SidebarAdmin from "../../../components/components-sidebars/sidebar-admin";
import { SettingsNotifications } from "../../mining/settings-mining/settings-notifications";
import { SettingsPassword } from "../../mining/settings-mining/settings-password";

export default function SettingAdmin() {
  return (
    <div className="settingPage">
      <div className="sideBar">
        <SidebarAdmin />
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
