import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.scss";

export default function SearchInput() {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  return (
    <div className="searchContainer">
      {isInputVisible && (
        <input type="text" placeholder="Search..." className="textInput" />
      )}
      <FaSearch className="searchIcon" onClick={toggleInputVisibility} />
    </div>
  );
}
