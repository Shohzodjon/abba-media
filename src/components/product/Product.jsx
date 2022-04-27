import React from "react";
import "./product.css";
import archa from "../../assets/imges/arch.svg";
import cart1 from "../../assets/imges/cart1.png";
import cart2 from "../../assets/imges/cart2.png";
import cart3 from "../../assets/imges/cart3.png";
import cart4 from "../../assets/imges/cart4.png";
import cart5 from "../../assets/imges/cart5.png";
import cart6 from "../../assets/imges/cart6.png";
import issiqxona2 from "../../assets/imges/issiqxona2.png";
import issiqxona from "../../assets/imges/issiqxona.png";
import traktor from "../../assets/imges/traktor.png";
import bulut from "../../assets/imges/bulut.png";
import letter from "../../assets/imges/letter.png";
import microsoft from "../../assets/imges/logos_microsoft.png";
import google from "../../assets/imges/logos_google.png";
import slack from "../../assets/imges/logos_slack.png";
import word from "../../assets/imges/word_logo.png";
import next from "../../assets/imges/next.svg";

function Product() {
  return (
    <section className="product_section" id="product">
      <div className="img_archa">
        <img src={archa} alt="archa" />
      </div>
      <div className="container_box">
        <h2>our production</h2>
        <p>
          "Your work is going to fill a large part of your life, and the only
          way to be truly satisfied is to do what you believe is great work"
        </p>
        <div className="product_grid">
          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart1} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>Asosiy Plyonka Turlari</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>

          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart2} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>Asosiy Zajim turlari</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>

          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart3} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>Tomchilab sug’orish tizimi</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>

          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart4} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>ISSIQXONANING sovutish TIZIMI</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>

          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart5} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>ISSIQXONANING ISITISH TIZIMI</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>

          <div className="item d_flex">
            <div className="grid_img">
              <img src={cart6} alt="cart1" />
            </div>
            <div className="grid_info">
              <h4>QO’shimcha aksessuarlar</h4>
              <p>
                Et magni et ea unde tempore. Corrupti quia adipisci qui dicta
                sint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="about_section" id="about">
        <div className="container_box d_flex">
          <div className="about_left">
            <h2>little ABout our company</h2>
            <p>
              "Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work. And the only way to do great work is to love what you do."
            </p>
            <div className="btn_group">
              <button className="about_btn">More about</button>
              <button className="about_btn">our youtube</button>
            </div>
          </div>
          <div className="about_right">
            <div className="issiqxona1">
              <img src={issiqxona2} alt="issiqxona1" />
            </div>
            <div className="issiqxona2">
              <img src={issiqxona} alt="issiqxona2" />
            </div>
            <div className="traktor">
              <img src={traktor} alt="traktor" />
            </div>
          </div>
        </div>

        <div className="bulut">
          <img src={bulut} alt="bulut" />
        </div>
      </section>
      <section className="pattern"></section>

      <ul className="social_link container_box">
        <li>
          <a href="#">
            <img src={letter} alt="letter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={microsoft} alt="letter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={google} alt="letter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={slack} alt="letter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={word} alt="letter" />
          </a>
        </li>

        <li>
          <a href="#">
            <img src={next} alt="next" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Product;
