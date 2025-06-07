import React from "react";
import "./SearchBar.css";
import search_icon from "../../assets/search_icon.png";
import mic_icon from "../../assets/mic_icon.png";
import scanner_icon from "../../assets/scanner_icon.png";

function SearchBar({ isDark }) {
  return (
    <div className={`search-bar ${isDark ? "dark" : ""}`}>
      <img src={search_icon} alt="Search" className="icon" />
      <input type="text" />
      <div className="icons">
        <img src={mic_icon} alt="Mic" className="icon" />
        <img src={scanner_icon} alt="Scanner" className="icon" />
      </div>
    </div>
  );
}

export default SearchBar;
