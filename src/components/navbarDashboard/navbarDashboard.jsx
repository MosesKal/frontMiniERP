import ComboBox from "../date/date";
import SearchInput from "../searchInput/SearchInput";
import "./NavbarDashboard.scss";
export default function NavbarDashboard() {
  return (
    <div className="navbarWrapper">
      <h1 className="title">Dashboard</h1>
      <div className="navbar">
        <ComboBox />
      </div>
      <div className="searchContainer">
        <SearchInput />
      </div>
    </div>
  );
}
