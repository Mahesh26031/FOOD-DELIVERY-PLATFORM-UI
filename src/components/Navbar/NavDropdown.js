import "../../assets/main-page.css";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";
const DELIVERY_LOTTIE = require("../LottieFiles/delivery.json");

function NavDropdown() {
  return (
    <div className="sticky-step-header">
      <div className="header">
        <Player
          autoplay={true}
          loop={true}
          controls={false}
          src={DELIVERY_LOTTIE}
        />
        <div className="heading">
          GoMeal<span className="header-dot">.</span>
        </div>
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
            alt=""
          />
        </div>
        <button className="upgrade-account">Upgrade</button>
        {/* <div id="circle"></div> */}
      </div>
    </div>
  );
}

export default NavDropdown;
