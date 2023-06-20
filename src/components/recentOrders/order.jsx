import { Icon } from "@iconify/react";
import "./Order.scss";

export default function RecentOrder() {
  return (
    <div className="recent-order">
      <table>
        <h2>Recent Order</h2>
        <tbody>
          <tr>
            <th>Tracking No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Total Order</th>
            <th>Total Amount</th>
          </tr>
          <tr>
            <td>#876364</td>
            <td>
              <span className="product-icon">
                <Icon icon="ic:baseline-camera-alt" className="product-icon" />
              </span>
              Camera Lens
            </td>
            <td>$178</td>
            <td className="total">325</td>
            <td>$1,46,660</td>
          </tr>
          <tr>
            <td>#876368</td>
            <td>
              <span className="product-icon">
                <Icon icon="twemoji:hiking-boot" className="product-icon" />
              </span>
              Black Shoes
            </td>
            <td>$14</td>
            <td className="total">53</td>
            <td>$46,6600</td>
          </tr>

          <tr>
            <td>#876368</td>
            <td>
              <span className="product-icon">
                <Icon icon="twemoji:hiking-boot" className="product-icon" />
              </span>
              Black Shoes
            </td>
            <td>$14</td>
            <td className="total">53</td>
            <td>$46,6600</td>
          </tr>

          <tr>
            <td>#876368</td>
            <td>
              <span className="product-icon">
                <Icon icon="twemoji:hiking-boot" className="product-icon" />
              </span>
              Black Shoes
            </td>
            <td>$14</td>
            <td className="total">53</td>
            <td>$46,6600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
