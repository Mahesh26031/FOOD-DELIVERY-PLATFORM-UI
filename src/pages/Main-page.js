import "../assets/main-page.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Errorpage";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home";
import Reports from "./Reports";
import Products from "./Products";

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
          <p>hello3</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
