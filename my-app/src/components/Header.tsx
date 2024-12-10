import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="Rectangle">
      <div className="logo">LOGOBEAR</div>
      <nav>
        <a href="/jogs">JOGS</a>
        <a href="/info">INFO</a>
        <a href="/contact">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
