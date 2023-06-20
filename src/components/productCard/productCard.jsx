import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./ProductCard.scss";

function ProductCard({ icon, quantity, type, className, color }) {
  return (
    <div className={`container ${className}`}>
      <div className="icon-container">
        <Icon icon={icon} className="icon" style={{ color }} />
      </div>
      <div className="text">
        <span className="quantity">{quantity}</span>
        <h3 className="type">{type}</h3>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  icon: PropTypes.any.isRequired,
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProductCard;
