import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import ProfileAndName from "./ProfileAndName/ProfileAndName";
import SignUp from "../Registration/SignUp";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="navbar">
        <Link className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <Link to="/" className="logo">
          <FaHouseChimney className="logo-img" />
         Cheep Delala</Link>

        <Link to="/signup" >
        <div className="nav-sign-up">
            <h5>SIGN UP</h5>
        </div>
        </Link>
        
      </div>

        
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <ProfileAndName />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
