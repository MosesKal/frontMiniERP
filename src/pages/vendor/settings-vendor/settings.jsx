import SidebarVendor from "../../../components/components-sidebars/sidebar-vendor";
import { SettingsNotifications } from "../../mining/settings-mining/settings-notifications";
import { SettingsPassword } from "../../mining/settings-mining/settings-password";

export default function SettingVendor() {
  return (
    <div className="settingPage">
      <div className="sideBar">
        <SidebarVendor />
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
