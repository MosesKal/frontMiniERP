import "./Calendar.scss";
import SidebarVendor from "../../../components/components-sidebars/sidebar-vendor";
import SearchAppBar from "../../../components/reUsableNavbar/reUsableNavbar";
import TableColumnPinning from "../../../components/tab/tab";

export default function Calendar() {
  return (
    <div className="calendarContainer">
      <div className="sideBar">
        <SidebarVendor />
      </div>

      <div className="searchSide">
        <SearchAppBar />

        <div>
          <TableColumnPinning />
        </div>
      </div>
    </div>
  );
}
