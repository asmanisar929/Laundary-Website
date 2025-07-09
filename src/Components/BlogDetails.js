import React, { useState } from "react";
import "./BlogDetails.css";
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

const BlogDetails = () => {
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
        <h1 className="about-heading">Blog Details</h1>
      </section>

      <ScrollToTopButton />

      <section className="blog-section">
        <div className="blog-container">
          {/* Left Blog Posts */}
          <div className="blog-left">
            {/* Blog Post 1 */}
            <div className="blog-card">
              <div className="blog-image-container">
                <img src="/Images/Home/10006.webp" alt="BlogDetails" />
              </div>
              <div className="blog-content">
                <h2
                  className="blog-title"
                  style={{ marginTop: "-1%", marginLeft: "-3%" }}
                >
                  Second divided from form fish beast made every of seas all
                  <br />
                  gathered us saying he our
                </h2>
                <div
                  className="blog-meta"
                  style={{
                    fontSize: "13px",
                    marginLeft: "-3%",
                    marginTop: "2%",
                  }}
                >
                  <span>
                    <img src="/Icons/user-solid.svg" alt="User" /> Travel,
                    Lifestyle
                  </span>
                  <span>
                    <img src="/Icons/comments-solid.svg" alt="Comments" /> 03
                    Comments
                  </span>
                </div>

                <p className="blog-description1">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have
                  <br /> to spend money on boot camp when you can get the MCSE
                  study materials yourself at a fraction of the camp
                  <br /> price. However, who has the willpower
                </p>

                <p className="blog-description2">
                  MCSE boot camps have its supporters and its detractors. Some
                  people do not understand why you should have
                  <br /> to spend money on boot camp when you can get the MCSE
                  study materials yourself at a fraction of the camp
                  <br /> price. However, who has the willpower to actually sit
                  through a self-imposed MCSE training. who has the
                  <br /> willpower to actually
                </p>
              </div>
            </div>

            {/* Blog Post 2*/}
            <section class="quote-section">
              <div class="quote-box">
                <p>
                  <em>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training.
                  </em>
                </p>
              </div>
            </section>

            <p className="blog-description3">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have
              <br /> to spend money on boot camp when you can get the MCSE study
              materials yourself at a fraction of the camp
              <br /> price. However, who has the willpower
            </p>

            <p className="blog-description4">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have
              <br /> to spend money on boot camp when you can get the MCSE study
              materials yourself at a fraction of the camp
              <br /> price. However, who has the willpower to actually sit
              through a self-imposed MCSE training. who has the
              <br /> willpower to actually
            </p>
            <hr
              class="section-divider1"
              style={{
                marginLeft: "1%",
                color: "grey",
                width: "94%",
                border: "none" /* Remove default border */,
                borderTop: "1px solid grey" /* Add custom thin line */,
              }}
            />

            <section class="post-footer">
              {/*!-- Like & Share Row -->*/}
              <div class="like-share-row">
                <div class="likes">
                  <span class="icon">
                    {" "}
                    <img src="/Icons/heart-solid.svg" />
                  </span>{" "}
                  Lily and 4 people like this
                </div>
                <div class="social-icons">
                  <span>
                    <img src="/Icons/facebook-f-brands (1).svg" />
                  </span>
                  <span>
                    <img src="/Icons/twitter-brands (1).svg" />
                  </span>
                  <span>
                    <img src="/Icons/basketball-solid.svg" />
                  </span>
                  <span>
                    <img src="/Icons/behance-brands.svg" />
                  </span>
                </div>
              </div>

              {/*<!-- Navigation Row -->*/}
              <div class="nav-row">
                <div class="prev-post">
                  <img src="/Images/Home/share1.png" alt="Prev Post" />
                  <div>
                    <span>Prev Post</span>
                    <h4>Space The Final Frontier</h4>
                  </div>
                </div>
                <div class="next-post">
                  <div>
                    <span>Next Post</span>
                    <h4>Telescopes 101</h4>
                  </div>
                  <img src="/Images/Home/share2.png" alt="Next Post" />
                </div>
              </div>
              <hr class="section-divider" />

              {/* <!-- Author Box -->*/}
              <div class="author-box">
                <img src="Images/Home/harvard.png " alt="Author" />
                <div>
                  <h5>Harvard milan</h5>
                  <p>
                    Second divided from form fish beast made. Every of seas all
                    gathered use saying you're, he our dominion twon Second
                    divided from
                  </p>
                </div>
              </div>
            </section>
            <hr
              class="section-divider2"
              style={{
                marginLeft: "1%",
                color: "grey",
                width: "94%",
                border: "none",
                borderTop: "1px solid grey",
                marginTop: "-4%",
              }}
            />

            <section className="comments-section">
              <h4>05 Comments</h4>

              <div className="comment">
                <img src="/Images/Home/cmnt1.png" alt="User 1" />
                <div className="comment-content">
                  <p>
                    Multiply sea night grass fourth day sea lesser rule open
                    subdue female fill which them Blessed, give fill lesser
                    bearing multiply sea night grass fourth day sea lesser
                  </p>
                  <div className="comment-footer">
                    <span className="author">Emilly Blunt</span>
                    <span className="date">December 4, 2017 at 3:12 pm</span>
                    <span className="reply">REPLY</span>
                  </div>
                </div>
              </div>

              <div className="comment">
                <img src="/Images/Home/cmnt2.png" alt="User 2" />
                <div className="comment-content">
                  <p>
                    Multiply sea night grass fourth day sea lesser rule open
                    subdue female fill which them Blessed, give fill lesser
                    bearing multiply sea night grass fourth day sea lesser
                  </p>
                  <div className="comment-footer">
                    <span className="author">Emilly Blunt</span>
                    <span className="date">December 4, 2017 at 3:12 pm</span>
                    <span className="reply">REPLY</span>
                  </div>
                </div>
              </div>

              <div className="comment">
                <img src="/Images/Home/cmnt3.webp" alt="User 3" />
                <div className="comment-content">
                  <p>
                    Multiply sea night grass fourth day sea lesser rule open
                    subdue female fill which them Blessed, give fill lesser
                    bearing multiply sea night grass fourth day sea lesser
                  </p>
                  <div className="comment-footer">
                    <span className="author">Emilly Blunt</span>
                    <span className="date">December 4, 2017 at 3:12 pm</span>
                    <span className="reply">REPLY</span>
                  </div>
                </div>
              </div>
            </section>

            <hr
              class="section-divider2"
              style={{
                marginLeft: "1%",
                color: "grey",
                width: "94%",
                border: "none",
                borderTop: "1px solid grey",
                marginTop: "-4%",
              }}
            />

            {/* Contact Form */}
            <h2
              className="contact-title"
              style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "400",
                marginLeft: "1%",
              }}
            >
              Leave a Reply
            </h2>
            <form className="contact-form" style={{ marginTop: "-6%" }}>
              <textarea placeholder="Write Comment" rows="15" cols="100" />
              <div className="input-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>

              <div class="subject-row">
                <input type="text" placeholder="Website" />
                <button class="send-button">POST COMMENT</button>
              </div>
            </form>
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
      </footer>
    </>
  );
};

export default BlogDetails;
