import React, { useState } from "react";
import "./Services.css";
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

const Services = () => {
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
        <h1 className="about-heading">Our Services</h1>
      </section>

      {/* Work Process Section */}
      <section className="work-process">
        <div className="section-header">
          <p className="process-label">Our Process</p>
          <h2>This is how we work</h2>
        </div>
        <div className="process-steps">
          <div className="step">
            <img src="/Images/Home/10003.svg" alt="Collect" />
            <h3>We Collect Your Clothes</h3>
            <p>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </p>
          </div>
          <div className="step">
            <img src="/Images/Home/10004.svg" alt="Wash" />
            <h3>Wash Your Clothes</h3>
            <p>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </p>
          </div>
          <div className="step">
            <img src="/Images/Home/10005.svg" alt="Delivery" />
            <h3>Get Delivery</h3>
            <p>
              The automated process starts as soon as your clothes go into the
              machine. The outcome is gleaming clothes!
            </p>
          </div>
        </div>
        <hr className="section-divider" />
      </section>

      {/* Service Section */}
      <section className="service-section">
        <div className="service-header">
          <p className="service-label">Services</p>
          <h2>Services We Offer</h2>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <img src="/Images/Home/10021.png" alt="Wash" />
          </div>
          <div className="service-card">
            <img className="card-bg" src="/Images/Home/10023.webp" alt="Iron" />
            <div className="circle-icon">
              <img src="/Images/Home/10022.png" alt="Icon" />
            </div>
            <div className="card-overlay-content">
              <h3>Cloth Laundry</h3>
              <p>
                The automated process starts as soon as your <br /> clothes go
                into the machine. The outcome is <br /> gleaming clothes!!
              </p>
            </div>
          </div>
          <div className="service-card">
            <img className="card-bg" src="/Images/Home/10023.webp" alt="Iron" />
            <div className="circle-icon">
              <img src="/Images/Home/10022.png" alt="Icon" />
            </div>
            <div className="card-overlay-content">
              <h3>Cloth Ironing</h3>
              <p>
                The automated process starts as soon as your <br /> clothes go
                into the machine. The outcome is <br /> gleaming clothes!!
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="/Images/Home/10020.png" alt="Delivery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <div>
            <h2>Call us for a service</h2>
            <p>We deliver the goods to the most complicated places on earth</p>
          </div>
          <button className="cta-button">
            <img src="/Images/Home/10018.png" alt="phonics" className="phone" />{" "}
            Learn More
          </button>
        </div>
      </section>

      {/* Testimonial Section with Avatar Rotation */}
      <section className="testimonial-section">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &lt;
        </button>

        <div className="testimonial-content">
          <div
            className={`testimonial-avatars ${
              isSliding ? "sliding" : ""
            } ${slideDirection}`}
          >
            {currentAvatars.map((avatar, i) => (
              <img
                key={i}
                src={avatar}
                alt="avatar"
                className={i === 1 ? "active" : "blurred"}
              />
            ))}
          </div>
          <p>
            The automated process starts as soon as your clothes go into the{" "}
            <br /> machine. The outcome is gleaming clothes!
          </p>
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <h4>- Rupaya</h4>
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          &gt;
        </button>
      </section>
      <hr className="section-divider" />

      {/* Achievement Section */}
      <section className="achievement-section">
        <p className="section-label">Fun Fact</p>
        <h2 className="section-title">Company achievement</h2>

        <div className="achievement-cards">
          <div className="achievement-card1">
            <h3>4000</h3>
            <p>
              The automated process starts as soon as your
              <br /> clothes go into the machine.
            </p>
          </div>
          <div className="achievement-card2">
            <h3>300+</h3>
            <p>
              The automated process starts as soon as your
              <br /> clothes go into the machine.
            </p>
          </div>
          <div className="achievement-card3">
            <h3>95%</h3>
            <p>
              The automated process starts as soon as your
              <br /> clothes go into the machine.
            </p>
          </div>
        </div>

        <div className="wave-image">
          <img src="/Images/Home/10007.png" alt="Wave" />
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <img
          src="/Images/Home/10012.png"
          alt="Map with card"
          className="map-image"
        />
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-column">
            <h2 className="footer-title">
              <img
                src="/Images/Home/10002.png"
                alt="laundry"
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
              <img src="/Icons/pinterest-p-brands.svg" className="pinterest" />
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
          src="/Images/Home/10007.png"
          alt="Wave Background"
          className="wave-bg"
        />
        <ScrollToTopButton />
      </footer>
    </>
  );
};

export default Services;
