import React, { useState } from "react";
import "./Message.scss";
import HeaderButton from "../../../components/headerButton";
import { v4 as uuidv4 } from "uuid";
import SidebarVendor from "../../../components/components-sidebars/sidebar-vendor";

export default function MessageVendor() {
  return (
    <div className="messageContainer">
      <div className="sideBar">
        <SidebarVendor />
      </div>
    </div>
  );
}
