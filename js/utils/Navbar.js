import { useRef } from "react";
import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/#" className="nav__brand">
        Home
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/menu" className="nav__link">
            MENU
          </a>
        </li>
		<li className="nav__item">
          <a href="/insert" className="nav__link">
            ORDER A PIZZA
          </a>
        </li>
        <li className="nav__item">
          <a href="/order" className="nav__link">
          YOUR ORDERS
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;