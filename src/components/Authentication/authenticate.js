/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../assets/authentication.css";
import { triggerCloseLoginModal } from "../../helpers/utils";

function Login() {
  const handlecancelBtnClick = () => {
    triggerCloseLoginModal();
  };
  return (
    <div className="login-modal-wrapper">
      <div className="login-modal-view">
        <button className="login-modal-close">
          <img
            src="https://www.linkpicture.com/q/cancel_3.png"
            className="login-cancel"
            onClick={handlecancelBtnClick}
          />
        </button>
        <div className="login-modal-content">
          <div className="login-modal-header">
            <img
              src="https://www.linkpicture.com/q/delivery-boy-on-scooter.png"
              className="scooter"
            />
            <div className="header login-name">
              GoMeal<span className="header-dot">.</span>
            </div>
          </div>

          <div className="login-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
