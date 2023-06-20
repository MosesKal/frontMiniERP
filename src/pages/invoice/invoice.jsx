import Sidebar from "../../components/sidebar/sidebar";
// import SearchInput from "../../components/searchInput/SearchInput";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import BasicMenu from "../../components/customizedMenu/customizedMenu";
import Checkbox from "@mui/material/Checkbox";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import SearchAppBar from "../../components/reUsableNavbar/reUsableNavbar";

import "./Invoice.scss";

function getStatusColor(status) {
  switch (status) {
    case "complete":
      return "complete-color";
    case "cancelling":
      return "cancelling-color";
    case "pending":
      return "pending-color";
    default:
      return "";
  }
}

export default function Invoice() {
  const [starColors, setStarColors] = useState(Array(7).fill("grey"));

  const handleStarClick = (index) => {
    setStarColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = prevColors[index] === "grey" ? "#FFD66B" : "grey";
      return newColors;
    });
  };

  return (
    <>
      <div className="invoceContainer flex">
        <div className="sideBar">
          <Sidebar />
        </div>

        <div className="listContainer">
          <div className="invoiceNavbar">
            <SearchAppBar />
          </div>
          <table>
            <tbody>
              <tr className="colums">
                <th>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  Invoice Id
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>

              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876364
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  12 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("complete")}`}>
                  Complete
                </td>

                <td className="star" onClick={() => handleStarClick(0)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[0], cursor: "pointer" }}
                    />
                  </span>
                </td>

                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span className="checkBox">
                    <Checkbox defaultChecked />
                  </span>
                  #876123
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  10 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("pending")}`}>
                  Pending
                </td>

                <td className="star" onClick={() => handleStarClick(1)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[1], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876213
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  09 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("complete")}`}>
                  Complete
                </td>

                <td className="star" onClick={() => handleStarClick(2)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[2], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  09 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("cancelling")}`}>
                  Cancelling
                </td>

                <td className="star" onClick={() => handleStarClick(3)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[3], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  10 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("complete")}`}>
                  Complete
                </td>

                <td className="star" onClick={() => handleStarClick(4)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[4], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  10 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("pending")}`}>
                  Pending
                </td>

                <td className="star" onClick={() => handleStarClick(5)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[5], cursor: "pointer" }}
                    />
                  </span>
                </td>

                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  10 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("complete")}`}>
                  Complete
                </td>

                <td className="star" onClick={() => handleStarClick(6)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[6], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  8 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("complete")}`}>
                  Complete
                </td>

                <td className="star" onClick={() => handleStarClick(7)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[7], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  2 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("cancelling")}`}>
                  Cancelling
                </td>

                <td className="star" onClick={() => handleStarClick(8)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[8], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Checkbox defaultChecked />
                  </span>
                  #876987
                </td>
                <td>
                  <span className="product-icon">
                    <Icon icon="noto:man-elf" className="product-icon" />
                  </span>
                  John Doe
                </td>
                <td className="tdEmailIcon">
                  <span className="emailIcon">
                    <EmailIcon />
                  </span>
                  johndoe2211@gmail.com
                </td>
                <td className="tdCalender">
                  {" "}
                  <span className="spanCalendar">
                    <CalendarMonthIcon />
                  </span>
                  1 Dec, 2020
                </td>
                <td className={`status ${getStatusColor("pending")}`}>
                  Pending
                </td>

                <td className="star" onClick={() => handleStarClick(9)}>
                  <span className="starIcon">
                    <Icon
                      icon="mdi:star"
                      style={{ color: starColors[9], cursor: "pointer" }}
                    />
                  </span>
                </td>
                <td>
                  <span>
                    <BasicMenu />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
