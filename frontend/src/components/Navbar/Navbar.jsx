/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogin,setIsLogin] = useState(false)

  const navigation = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("access_token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }

  },[isLogin,setIsLogin])



  const handleLogOut = () =>{
    try {
      const res = axios.get("http://127.0.0.1:5000/user/signout");
      localStorage.clear();
      console.log(res.status)
      navigation("/auth")
      window.location.reload();

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
     {isLogin&& <div className="loginDiv">
     
        <button className="newAdv" onClick={() => navigation("/createApart")}>פרסום מודעה חדשה</button>
        
        <button className="signOut" onClick={handleLogOut}>התנתקות</button>
        <p>ברוך הבא</p>
      </div>}
      <ul className={menuOpen ? "open" : ""}>
      
      {menuOpen && isLogin && (
        <div >
        <button style={{padding:6,fontWeight:'bold',fontSize:'16px',width:'100%'}}>פרסום מודעה חדשה</button>
      </div>
      )}
        <li>
          <NavLink to="/vehicles">רכב</NavLink>
        </li>
        <li>
          <NavLink to="/realEstate">נדל"ן</NavLink>
        </li>
        <li>
          <NavLink to="/auth">איזור אישי</NavLink>
        </li>
        {menuOpen && isLogin && (
        <div>
      <button style={{padding:6,fontWeight:'bold',fontSize:'16px',width:'100%'}} onClick={handleLogOut}>התנתקות</button>
      </div>
      )}
      </ul>
    </nav>
  );
};

export default Navbar;
