import React from "react";
import "./Footer.css";

function Footer({ isDark }) {
  return (
    <footer className={`footer ${isDark ? "dark" : ""}`}>
      <div className="footer-top">
        <span>India</span>
      </div>
      <div className="footer-bottom">
        <div className="footer-links left">
        
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
        </div>
        <div className="footer-links right">
         
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
