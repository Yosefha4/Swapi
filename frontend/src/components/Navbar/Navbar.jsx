/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      
        <li>
          <NavLink to="/vehicles">רכב</NavLink>
        </li>
        <li>
          <NavLink to="/realEstate">נדל"ן</NavLink>
        </li>
        <li>
          <NavLink to="/auth">איזור אישי</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
