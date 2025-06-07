import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import CustomButton from "./components/CustomButton/CustomButton";
import DarkModeToggle from "./components/DrakModeToggle/DarkModeToggle";
import google from "./assets/google.png";
import google_dark from "./assets/google_dark.png";
import menu_icon from "./assets/menu_icon.png";
import menu_icon_dark from "./assets/menu_icon_dark.png";
import lab_icon from "./assets/lab_icon.png";
import lab_icon_dark from "./assets/lab_icon_dark.png";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={`app ${isDark ? "dark" : ""}`}>
      <header className="nav">
        <div className="left">
          <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
        </div>
        <div className={`right ${isDark ? "dark" : ""}`}>
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <div className="nav-icons">
            <img
              src={isDark ? lab_icon_dark : lab_icon}
              alt="Search Labs"
              className="search-labs-icon"
            />
          </div>
          <div className="nav-icons">
            <img
              src={isDark ? menu_icon_dark : menu_icon}
              alt="Google Apps"
              className="google-apps-icon"
            />
          </div>

          <div className="user">K</div>
        </div>
      </header>

      <main className="main">
        <img
          src={isDark ? google_dark : google}
          alt="Google Logo"
          className="logo"
        />

        <SearchBar isDark={isDark} />
        <div className="buttons">
          <CustomButton label="Google Search" />
          <CustomButton label="I'm Feeling Lucky" />
        </div>
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
