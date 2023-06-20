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

function Sidebar() {
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
            <NavLink to="/admin" end activeClassName="active">
              <UilApps className="icon" />
              <span className="menu-name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" activeClassName="active">
              <UilChart className="icon uilChart" />
              <span className="menu-name">Analytics</span>
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
              <span className="menu-name">Product Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar" activeClassName="active">
              <UilCalendarAlt className="icon" />
              <span className="menu-name">Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" activeClassName="active">
              <SimpleBadge className="icon badge" />
              <span className="menu-name message">Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notification" activeClassName="active">
              <UilBell className="icon" />
              <span className="menu-name">Notification</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
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

export default Sidebar;
