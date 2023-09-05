/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin,setIsLogin] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("access_token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }

  },[isLogin])
  // const isLogin = localStorage.getItem("access_token") ? localStorage.getItem("access_token") : false

  const handleLogOut = () =>{
    try {
      const res = axios.get("http://127.0.0.1:5000/user/signout");
      localStorage.clear();
      console.log(res.status)
    } catch (error) {
      console.log(error)
    }
  }

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
     {isLogin&& <div style={{display:"flex",gap:12,alignItems:'center'}}>
  
        <button className="signOut" onClick={handleLogOut}>התנתקות</button>
        <p>ברוך הבא</p>
      </div>}
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
