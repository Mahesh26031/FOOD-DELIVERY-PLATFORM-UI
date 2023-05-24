import "../assets/main-page.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Errorpage";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import Reports from "./Reports";
import Products from "./Products";
import UserDetails from "../components/UserDetails/UserDetails";
function Main() {
  return (
    <div className="App">
      <div className="container">
        <div className="sticky-step-header">
          <div className="header">
            GoMeal<span className="header-dot">.</span>
          </div>
          <div className="step-wizard">
            <Navbar />
          </div>
          <div className="upgrade-voucher">
            <div className="flex-container">
              <p className="voucher-text">
                Upgrade your Account to Get Free Voucher
              </p>
              <img
                src="https://www.linkpicture.com/q/Untitled-Diagram.drawio-4_1.png"
                className="dots"
              />
            </div>
            <button className="upgrade-account">Upgrade</button>
            {/* <div id="circle"></div> */}
          </div>
        </div>
        <div className="home">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/reports" element={<Reports />} />
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
