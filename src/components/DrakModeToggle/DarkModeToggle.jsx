import React from "react";
import "./DarkModeToggle.css";

function DarkModeToggle({ isDark, toggleDarkMode }) {
  return (
    <button className={`toggle ${isDark ? "dark" : ""}`} onClick={toggleDarkMode}>
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default DarkModeToggle;
