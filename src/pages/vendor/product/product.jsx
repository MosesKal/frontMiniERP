import Sidebar from "../../../components/sidebar/sidebar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TableColumnPinning from "../../../components/tab/tab";
import SidebarVendor from "../../../components/components-sidebars/sidebar-vendor";

export default function Product() {
  return (
    <div className="productWrapper">
      <div className="sideBar">
        <SidebarVendor />
      </div>

    </div>
  );
}
