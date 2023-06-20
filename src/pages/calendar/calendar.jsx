import Sidebar from "../../components/sidebar/sidebar";
import SearchAppBar from "../../components/reUsableNavbar/reUsableNavbar";
import TableColumnPinning from "../../components/tab/tab";

import "./Calendar.scss";

export default function Calendar() {
  return (
    <div className="calendarContainer">
      <div className="sideBar">
        <Sidebar />
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
