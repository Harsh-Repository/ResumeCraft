import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p className="footer__copyright">by Harshit | Let's catch up again.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}
