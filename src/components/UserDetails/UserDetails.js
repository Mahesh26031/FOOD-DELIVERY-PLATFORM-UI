import React, { useState } from "react";
import "../../assets/navbar.css";

import { Userjson } from "./Userjson";
import { NavLink } from "react-router-dom";
import "../../assets/userdetails.css";
import Login from "../Authentication/authenticate";
import { triggerLoginModal } from "../../helpers/utils";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";

// const { user: currentUser } = useSelector((state) => state.auth);

function UserDetails() {
  const loginModalVisible = useSelector((state) => state.app.loginModalOpen);

  const handleClick = () => {
    document.body.classList.add("login-modal-open");
    // setShowComponent(true);
    triggerLoginModal();
  };
  return (
    <>
      {" "}
      <div className={"user-detail-icons"}>
        {Userjson.map((item, index) => {
          return (
            <NavLink exact className="user-link" to={item.path}>
              <img src={item.icon} alt="" className="user-icons" />
              <span className="small-circle"></span>
            </NavLink>
          );
        })}
        <div className="user-name" onClick={handleClick}>
          {"Login"}
        </div>
        {loginModalVisible && <Login />}
      </div>
    </>
  );
}

export default UserDetails;
