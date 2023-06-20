import SidebarMining from "../../../components/components-sidebars/sidebar-mining";
import { SettingsNotifications } from "./settings-notifications";
import { SettingsPassword } from "./settings-password";

export default function SettingMining() {
  return (
    <div className="settingPage">
      <div className="sideBar">
        <SidebarMining />
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
