import ProductCardParent from "../../../components/productCardGroup/productCardParent";
import Order from "../../../components/recentOrders/order";
import "./Dashboard.scss";
import NavbarDashboard from "../../../components/navbarDashboard/navbarDashboard";
import SidebarVendor from "../../../components/components-sidebars/sidebar-vendor";

export default function DashboardSeller() {
  return (
    <div className="boardContaner">
      <div className="child1">
        <SidebarVendor />
      </div>

      <div className="child2">
        <div className="navbarDashboard">
          <NavbarDashboard />
        </div>
        <div className="productCardParent">
          <ProductCardParent />
        </div>
        <div className="repo-analityc">
          <div className="report bg-white">{/* <OverviewSales /> */}</div>
          <div className="analytic bg-white"></div>
        </div>

        <div className="order">
          <div className="orderContainer">
            <Order />
          </div>
          {/* 
          <div className="topsellContainer">
            <div className="title">
              <h1>Top Selling Products</h1>
            </div>
            <div className="firstProduct">
              <img src={costume} className="costume" alt="Costume" />
              <div className="text">
                <h1>Costume</h1>
              </div>
            </div>
            <div className="secondProduct"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
