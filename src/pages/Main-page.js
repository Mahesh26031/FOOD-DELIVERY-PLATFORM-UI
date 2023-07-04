/* eslint-disable jsx-a11y/alt-text */
import "../assets/main-page.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Errorpage";
import Home from "./Home";
import OrderHistoryPage from "./OrderHistoryPage";
import Products from "./Products";
import UserDetails from "../components/UserDetails/UserDetails";
import NavDropdown from "../components/Navbar/NavDropdown";

function Main() {
  const [isdropdownOpen, setisdropdownOpen] = useState(false);
  const handledropdown = () => {
    setisdropdownOpen(!isdropdownOpen);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="left-header">
          <NavDropdown />
        </div>
        <div className="mobile-header">
          <div className="left-slide">
            {" "}
            <button className="drop-down-modal" onClick={handledropdown}>
              <img
                src="https://www.linkpicture.com/q/pngwing.com_12.png"
                className="drop-down-button"
              />
            </button>
          </div>
          <div className="right-slide">
            <UserDetails />
          </div>
          <div
            className={`mobile-drop-down ${
              isdropdownOpen ? "drop-down-show" : ""
            }`}
          >
            <button className="drop-modal-close">
              <img
                src="https://www.linkpicture.com/q/cancel_3.png"
                className="login-cancel"
                onClick={handledropdown}
              />
            </button>
            {isdropdownOpen && <NavDropdown />}
          </div>
        </div>
        <div className="home">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/history" element={<OrderHistoryPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <div className="user-details">
          <UserDetails />
        </div>
      </div>
    </div>
  );
}

export default Main;
