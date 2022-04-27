import React from "react";
import "./footer.css";
import footer_logo from "../../assets/imges/footer_logo.png";
import logo1 from "../../assets/imges/footer_logo1.svg";
import logo2 from "../../assets/imges/footer_logo2.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="container_box">
        <div className="d_flex">
          <ul>
            <li>
              <a href="#">
                <img src={footer_logo} alt="logo" />
              </a>
            </li>
            <li>
              <a href="#">Tashkent, Mustakillik St, 15</a>
            </li>
            <li>
              <a href="+998 99 000 00 00">Tel: +998 99 000 00 00</a>
            </li>
            <li>
              <a href="mailto:hello@alibaraka.com">
                {" "}
                E-mail: hello@alibaraka.com
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#about">
                <b>About us</b>
              </a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#about">Our team </a>
            </li>
            <li>
              <a href="#abou">Frequent Questions</a>
            </li>
            <li>
              <a href="#contact">Contact us </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#product">
                <b>Products</b>
              </a>
            </li>
            <li>
              <a href="#product"> Plyonka</a>
            </li>
            <li>
              <a href="#product"> Zajim</a>
            </li>
            <li>
              <a href="#product"> Isitish x Sovutish</a>
            </li>
            <li>
              <a href="#product">Suv taqsimoti</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#blog">
                <b>Blog</b>
              </a>
            </li>
            <li>
              <a href="#blog"> 10X</a>
            </li>
            <li>
              <a href="#blog">Gardening</a>
            </li>
            <li>
              <a href="#blog">Melon</a>
            </li>
            <li>
              <a href="#blog">Water dist</a>
            </li>
          </ul>
        </div>

        <div className="footer_line"></div>
        <div className="footer_bottom d_flex">
          <h6>Все права защищены.</h6>

          <ul className="footer_bottom_right">
            <li>
              <a href="#">Разработано в</a>
            </li>
            <li>
              <a href="#">
                <img src={logo1} alt="logo1" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo2} alt="logo2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
