import PropTypes from "prop-types";

function HeaderButton({ title, buttonText, onClick }) {
  return (
    <div className="headerBtn">
      <span className="cotationTitle">{title}</span>
      <button className="personilizedBtn" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HeaderButton;
