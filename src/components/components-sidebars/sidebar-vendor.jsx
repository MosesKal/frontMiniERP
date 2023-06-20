import "./Sidebar.scss";
import { Icon } from "@iconify/react";
import SimpleBadge from "../simplebadge/simpleBadge";
import {
  UilApps,
  UilChart,
  UilReceipt,
  UilFileAlt,
  UilCalendarAlt,
  UilBell,
  UilSetting,
} from "@iconscout/react-unicons";

import { NavLink, Outlet } from "react-router-dom";

function SidebarVendor() {
  return (
    <div className="sidebar flex">
      <div className="menu-logo">
        <span className="menu-logo-span flex">
          <Icon icon="ion:analytics" className="logo" /> ERP
        </span>
      </div>

      <div className="menu-item">
        <ul className="menu-item-list">
          <li>
            <NavLink to="/seller" end activeClassName="active">
              <UilApps className="icon" />
              <span className="menu-name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoice" activeClassName="active">
              <UilReceipt className="icon" />
              <span className="menu-name">Invoice</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" activeClassName="active">
              <UilFileAlt className="icon" />
              <span className="menu-name">Produit</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/client" activeClassName="active">
              <UilFileAlt className="icon" />
              <span className="menu-name">Client</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" activeClassName="active">
              <UilFileAlt className="icon" />
              <span className="menu-name">Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" activeClassName="active">
              <UilCalendarAlt className="icon" />
              <span className="menu-name">Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/message-seller" activeClassName="active">
              <SimpleBadge className="icon badge" />
              <span className="menu-name message">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification-seller" activeClassName="active">
              <UilBell className="icon" />
              <span className="menu-name">Notification</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings-vendor" activeClassName="active">
              <UilSetting className="icon" />
              <span className="menu-name">Settings</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default SidebarVendor;
