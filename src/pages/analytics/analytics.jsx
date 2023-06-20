import Sidebar from "../../components/sidebar/sidebar";
import "./Analytics.scss";
import BasicButtons from "../../components/button/button";
import { Icon } from "@iconify/react";
import BasicMenu from "../../components/customizedMenu/customizedMenu";

export default function Analytics() {
  return (
    <div className="analytic-Contaner flex">
      <div className="child1">
        <Sidebar />
      </div>

      <div className="child2 flex">
        <div className="header flex">
          <h1>Customer List</h1>
          <div className="button">
            <BasicButtons />
          </div>
        </div>
        <table>
          <tbody>
            <tr className="colums">
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Gender</th>
              <th></th>
            </tr>

            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
              <td>
                <span>
                  <BasicMenu />
                </span>
              </td>
            </tr>

            <tr>
              <td>
                <span className="product-icon">
                  <Icon icon="noto:man-elf" className="product-icon" />
                </span>
                John Doe
              </td>
              <td>johndoe2211@gmail.com</td>
              <td>+33757005467</td>
              <td className="gender">Male</td>
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
  );
}
