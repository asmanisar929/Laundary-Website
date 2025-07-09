import React, { useState } from "react";
import "./Blogpage.css";
import ScrollToTopButton from "./ScrollToTopButton";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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

const Blogpage = () => {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const currentAvatars = avatarSets[avatarIndex];
  const [activeButton, setActiveButton] = useState(1);

  const handleClick = (pageNumber) => {
    setActiveButton(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <h1 className="about-heading">Blog</h1>
      </section>

      <ScrollToTopButton />

      <section className="blog-section">
        <div className="blog-container">
          {/* Left Blog Posts */}
          <div className="blog-left">
            {/* Blog Post 1 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/10006.webp" alt="Blog" />
                <div className="blog-date">
                  <span className="day">15</span>
                  <span className="month">Jan</span>
                </div>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">
                  Google inks pact for new 35-storey office
                </h2>
                <p className="blog-description">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <div className="blog-meta">
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/10009 (3).png" alt="Blog" />
                <div className="blog-date">
                  <span className="day">15</span>
                  <span className="month">Jan</span>
                </div>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">
                  Google inks pact for new 35-storey office
                </h2>
                <p className="blog-description">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <div className="blog-meta">
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/blog.png" alt="Blog" />
                <div className="blog-date">
                  <span className="day">15</span>
                  <span className="month">Jan</span>
                </div>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">
                  Google inks pact for new 35-storey office
                </h2>
                <p className="blog-description">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <div className="blog-meta">
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/10014 (3).png" alt="Blog" />
                <div className="blog-date">
                  <span className="day">15</span>
                  <span className="month">Jan</span>
                </div>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">
                  Google inks pact for new 35-storey office
                </h2>
                <p className="blog-description">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <div className="blog-meta">
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/10010.webp" alt="Blog" />
                <div className="blog-date">
                  <span className="day">15</span>
                  <span className="month">Jan</span>
                </div>
              </div>
              <div className="blog-content">
                <h2 className="blog-title">
                  Google inks pact for new 35-storey office
                </h2>
                <p className="blog-description">
                  That dominion stars lights dominion divide years for fourth
                  have don't stars is that he earth it first without heaven in
                  place seed it second morning saying.
                </p>
                <div className="blog-meta">
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button
                onClick={() => handleClick("prev")}
                className={activeButton === "prev" ? "active" : ""}
              >
                &lt;
              </button>
              <button
                onClick={() => handleClick(1)}
                className={activeButton === 1 ? "active" : ""}
              >
                1
              </button>
              <button
                onClick={() => handleClick(2)}
                className={activeButton === 2 ? "active" : ""}
              >
                2
              </button>
              <button
                onClick={() => handleClick("next")}
                className={activeButton === "next" ? "active" : ""}
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="blog-sidebar">
            {/* Search */}
            <div className="blog-box blog-box1">
              <div className="search-widget">
                <div className="search-input-container">
                  <input type="text" placeholder="Search Keyword" />
                  <img
                    src="/Icons/magnifying-glass-solid.svg"
                    alt="Search Icon"
                    className="search-icon"
                  />
                </div>
                <button>SEARCH</button>
              </div>
            </div>

            {/* Categories */}
            <div className="blog-box blog-box2">
              <div className="category-widget">
                <h3>Category</h3>
                <ul>
                  <li>Resaurant food (37)</li>
                  <li>Travel news (10)</li>
                  <li>Modern technology (03)</li>
                  <li>Product (11)</li>
                  <li>Inspiration 21</li>
                  <li>Health Care (21) 09</li>
                </ul>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="blog-box blog-box3">
              <h3 className="recent-post-title">Recent Post</h3>
              <ul className="recent-post-list">
                <li>
                  <img src="/Images/Home/blog1.png" alt="Post 1" />
                  <div>
                    <h4>From life was you fish...</h4>
                    <span>January 12, 2019</span>
                  </div>
                </li>
                <li>
                  <img src="/Images/Home/blog2.png" alt="Post 2" />
                  <div>
                    <h4>The Amazing Hubble</h4>
                    <span>02 Hours ago</span>
                  </div>
                </li>
                <li>
                  <img src="/Images/Home/blog3.png" alt="Post 3" />
                  <div>
                    <h4>Astronomy Or Astrology</h4>
                    <span>03 Hours ago</span>
                  </div>
                </li>
                <li>
                  <img src="/Images/Home/blog4.png" alt="Post 4" />
                  <div>
                    <h4>Asteroids telescope</h4>
                    <span>01 Hours ago</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tag Clouds */}
            <div className="blog-box blog-box4">
              <h3 className="sidebar-title">Tag Clouds</h3>
              <div className="tag-clouds">
                <button>project</button>
                <button>love</button>
                <button>technology</button>
                <button>travel</button>
                <button>restaurant</button>
                <button>life style</button>
                <button>design</button>
                <button>illustration</button>
              </div>
            </div>

            {/* Instagram Feeds */}
            <div className="blog-box blog-box5">
              <h3 className="sidebar-title">Instagram Feeds</h3>
              <div className="instagram-feeds">
                <img src="/Images/Home/insta1.png" alt="Feed 1" />
                <img src="/Images/Home/insta2.png" alt="Feed 2" />
                <img src="/Images/Home/insta3.png" alt="Feed 3" />
                <img src="/Images/Home/insta4.png" alt="Feed 4" />
                <img src="/Images/Home/insta5.png" alt="Feed 5" />
                <img src="/Images/Home/insta6.png" alt="Feed 6" />
              </div>
            </div>

            {/* NewsLetter Feeds */}
            <div className="blog-box blog-box6">
              <h3 className="sidebar-title">Newsletter</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter email" />
                <button type="submit">SUBSCRIBE</button>
              </form>
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
    </>
  );
};

export default Blogpage;
