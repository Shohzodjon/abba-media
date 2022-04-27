import React from "react";

import logo from "../../assets/imges/logo.png";
import phone from "../../assets/imges/phone_icon.svg";
import "./head.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar_section">
        <div className="container_box d_flex">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <ul>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="navbar_contact d_flex">
            <div className="phone_img">
              <img src={phone} alt="phone" />
            </div>
            <div>
              <a href="+95-004-80-90">95-004-80-90</a>
              <br />
              <a href="94-641-40-00"> 94-641-40-00</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="header_section">
        <div className="container_box">
          <div className="d_flex">
            <div className="header_left">
              <h1>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
              <p>
                Here will be brief information about our company and some of
                advantages of our offers. Here will be brief information about
                our company.
              </p>
              <button className="header_btn">
                <span>EXPLORE</span>
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            <div className="header_right">
              <div className="header_square">
                <div className="header_circle">
                  <i className="bi bi-play-fill play_icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_sfare"></div>
      </section>
    </header>
  );
}

export default Header;
