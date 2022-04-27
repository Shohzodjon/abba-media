import React from "react";
import "./contact.css";
import contactImg from "../../assets/imges/contact_img.png";
function Contact() {
  return (
    <section className="contact_section" id="contact">
      <div className="container_box">
        <form className="contact_form">
          <div className="contact_section_img">
            <img src={contactImg} alt="img" />
          </div>
          <div className="contact_form_info">
            <h3>Still are you hesitating?</h3>
            <p>
              Your work is going to fill a large part of your life, and the only
              way to be truly satisfied.
            </p>
            <div className="d_flex">
              <input type="text" placeholder="Enter your name" />
              <input type="tel" placeholder="Enter your phone number" />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Enter your subject"
            ></textarea>
            <button className="form_submit" type="submit">
              SEND MESSAGE
            </button>
          </div>
          <div className="form_circle"></div>
          <div className="form_square"></div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
