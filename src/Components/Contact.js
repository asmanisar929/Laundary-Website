import React, { useState } from "react";
import "./Contact.css";
import ScrollToTopButton from "./ScrollToTopButton";

const avatarSets = [
  [
    "/Images/Home/10017.png",
    "/Images/Home/10016.png",
    "/Images/Home/10015.png",
  ],
  [
    "/Images/Home/10015.png",
    "/Images/Home/10017.png",
    "/Images/Home/10016.png",
  ],
  [
    "/Images/Home/10016.png",
    "/Images/Home/10015.png",
    "/Images/Home/10017.png",
  ],
];

const Contact = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const currentAvatars = avatarSets[avatarIndex];

  const handleNext = () => {
    if (isSliding) return;
    setSlideDirection("right");
    setIsSliding(true);
    setTimeout(() => {
      setAvatarIndex((prev) => (prev + 1) % avatarSets.length);
      setIsSliding(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isSliding) return;
    setSlideDirection("left");
    setIsSliding(true);
    setTimeout(() => {
      setAvatarIndex((prev) => (prev === 0 ? avatarSets.length - 1 : prev - 1));
      setIsSliding(false);
    }, 300);
  };

  return (
    <>
      <section className="about-hero">
        <div className="about-image-container">
          <img
            src="/Images/Home/About1.png"
            alt="About Background"
            className="about-bg"
          />
        </div>
        <h1 className="about-heading">Contact Us</h1>
      </section>

      {/*Oops Went wrong*/}
      <section className="map-error">
        <div className="error-content">
          <div className="error-icon">!</div>
          <h2>Oops! Something went wrong.</h2>
          <p>
            This page didn't load Google Maps correctly. See the JavaScript
            console for technical details.
          </p>
        </div>
      </section>

      <section className="contacts-section">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-content">
          {/* Left Form */}
          <form className="contact-form">
            <textarea placeholder="Enter Message" rows="15" cols="100" />
            <div className="input-row">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Email" />
            </div>

            <div class="subject-row">
              <input type="text" placeholder="Enter Subject" />
              <button class="send-button">SEND</button>
            </div>
          </form>

          {/* Right Info */}
          <div className="contact-info">
            <div className="info-item">
              <img className="info-pic1" src="/Icons/home.jpg" alt="home" />
              <div>
                <strong className="ph-no1">Buttonwood, California.</strong>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>

            <div className="info-item">
              <img className="info-pic2" src="/Icons/phone.webp" alt="phone" />
              <div>
                <strong className="ph-no2">+1 253 565 2365</strong>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="info-item">
              <img className="info-pic3" src="/Icons/envelop.jpg" alt="email" />
              <div>
                <strong className="ph-no3">support@colorlib.com</strong>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h2 className="footer-title">
              <img
                src="/Images/Home/10002.png"
                alt="laundary"
                className="laundary-icon"
              />
            </h2>
            <p>
              Suspendisse varius enim in eros elementum
              <br /> tristique. Duis cursus, mi quis viverra ornare, eros
              <br /> dolor interdum nulla.
            </p>
            <div className="social-icons">
              <img src="/Icons/twitter-brands.svg" className="twitter" />
              <img src="/Icons/facebook-f-brands.svg" className="facebook" />
              <img src="/Icons/pinterest-p-brands.svg" classname="pinterest" />
            </div>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>- Dry Cleaning</li>
              <li>- Dry Clean</li>
              <li>- Ironing Services</li>
              <li>- Laundry Service London</li>
              <li>- Laundry App</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Get in touch</h3>
            <p
              className="phone-number"
              style={{ color: "#637cff", fontSize: "24px" }}
            >
              (90) 898 789-8957
            </p>
            <p className="ph-no">laundry@567.com</p>
            <p className="ph-no">789/A, Green road NYC-9089</p>
          </div>
        </div>

        <div className="footer-bottom">
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <img src="/Icons/heart-solid.svg" /> by{" "}
          <span style={{ color: "#637cff", fontSize: "14px" }}>Colorlib</span>
        </div>

        <img
          src="Images/Home/10007.png"
          alt="Wave Background"
          className="wave-bg"
        />
        <ScrollToTopButton />
      </footer>

      <ScrollToTopButton />
    </>
  );
};
export default Contact;
