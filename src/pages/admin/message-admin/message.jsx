import React, { useState } from "react";
import "./Message.scss";
import HeaderButton from "../../../components/headerButton";
import { v4 as uuidv4 } from "uuid";
import SidebarAdmin from "../../../components/components-sidebars/sidebar-admin";

export default function MessageAdmin() {
  return (
    <div className="messageContainer">
      <div className="sideBar">
        <SidebarAdmin />
      </div>
    </div>
  );
}
