import React, { useState } from "react";
import "../../assets/navbar.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {" "}
      <nav className={"nav-menu active"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to={item.path}
                >
                  <img src={item.icon} alt="" />
                  <span className="title">{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
