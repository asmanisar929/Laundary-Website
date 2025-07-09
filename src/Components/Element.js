import React from "react";
import "./Element.css";
import ScrollToTopButton from "./ScrollToTopButton";

const Element = () => {
  const buttonTypes = [
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
    "link",
    "disable",
  ];

  const handleClick = (type) => {
    if (type !== "disable") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderButtons = (outline, rounded) => {
    const classes = `btn${outline ? " outline" : ""}${
      rounded ? " rounded" : ""
    }`;
    return (
      <>
        <button className={`btn default ${outline ? "outline" : ""}`}>
          Default
        </button>
        <button className={`${classes} primary`}>Primary</button>
        <button className={`${classes} success`}>Success</button>
        <button className={`${classes} info`}>Info</button>
        <button className={`${classes} warning`}>Warning</button>
        <button className={`${classes} danger`}>Danger</button>
        <button className={`${classes} link`}>Link</button>
        <button className={`${classes} disable`} disabled>
          Disable
        </button>
      </>
    );
  };
  const sizes = ["Extra Large", "Large", "Default", "Medium", "Small"];
  const colors = ["primary", "success", "primary", "success", "primary"];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sizeTypes = ["extralarge", "large", "default", "medium", "small"];
  const labels = ["Extra Large", "Large", "Default", "Medium", "Small"];

  <div className="button-size-row">
    {sizeTypes.map((size, idx) => (
      <button
        key={idx}
        className={`size-btn ${size}`}
        onClick={handleScrollToTop}
      >
        {labels[idx]}
      </button>
    ))}
  </div>;

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

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
        <h1 className="about-heading">Elements</h1>
      </section>
      <ScrollToTopButton />
      <section className="text-sample">
        <h2>Text Sample</h2>
        <p>
          Every avid independent filmmaker has <strong>Bold</strong> about
          making that <em>Italic</em> interest documentary, or short film to
          show off their creative prowess. Many have great ideas and want to
          “wow” the
          <sup>Superscript</sup> scene, or video renters with their big project.
          But once you have the
          <sub>Subscript</sub> “in the can” (no easy feat), how do you move from
          a <s>Strike</s> through of master DVDs with the
          <a href="#">“Underline”</a> marked hand-written title inside a
          secondhand CD case, to a pile of cardboard boxes full of shiny new,
          retail-ready DVDs, with UPC barcodes and polywrap sitting on your
          doorstep? You need to create eye-popping artwork and have your project
          replicated. Using a reputable full service DVD Replication company
          like PacificDisc, Inc. to partner with is certainly a helpful option
          to ensure a professional end result, but to help with your DVD
          replication project, here are 4 easy steps to follow for good DVD
          replication results:
        </p>
      </section>
      <hr
        class="section-divider2"
        style={{
          marginLeft: "11.5%",
          color: "grey",
          width: "76%",
          border: "none",
          borderTop: "0.1px solid grey",
          marginTop: "6%",
        }}
      />
      <section className="button-sample">
        <h2>Sample Buttons</h2>

        {/* Button Pair 1: Rows 1 & 2 */}
        <div className="buttons">
          <div className="button-pair">
            <div className="button-row odd-row">
              {renderButtons(false, false)}
            </div>
            <div className="button-row even-row">
              {renderButtons(true, false)}
            </div>
          </div>

          {/* Button Pair 2: Rows 3 & 4 */}
          <div className="button-pair">
            <div className="button-row odd-row">
              {renderButtons(false, false)}
            </div>
            <div className="button-row even-row">
              {renderButtons(true, false)}
            </div>
          </div>

          {/* Button Pair 3: Rows 5 & 6 */}
          <div className="button-pair">
            <div className="button-row rounded odd-row">
              {renderButtons(false, true)}
            </div>
            <div className="button-row rounded even-row">
              {renderButtons(true, true)}
            </div>
          </div>

          {/* Button Pair 4: Rows 7 & 8 */}
          <div className="button-pair">
            <div className="button-row rounded odd-row">
              {renderButtons(false, true)}
            </div>
            <div className="button-row rounded even-row">
              {renderButtons(true, true)}
            </div>
          </div>
        </div>
      </section>
      <section className="button-size-sample">
        {/* Row 1: Solid Buttons */}
        <div className="button-size-row">
          {sizes.map((label, idx) => (
            <button
              key={idx}
              className={`size-btn ${colors[idx]}`}
              onClick={handleScrollToTop}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Row 2: Outline Buttons */}
        <div className="button-size-row">
          {sizes.map((label, idx) => (
            <button
              key={idx}
              className={`size-btn size-outline ${colors[idx]}`}
              onClick={handleScrollToTop}
            >
              {label}
            </button>
          ))}
        </div>
      </section>
      <hr
        class="section-divider2"
        style={{
          marginLeft: "11.5%",
          color: "grey",
          width: "76%",
          border: "none",
          borderTop: "0.1px solid grey",
          marginTop: "6%",
        }}
      />
      <section className="image-text-section">
        <div className="content-row">
          <div className="image-container">
            <h3>Left Aligned</h3>
            <img src="/Images/Home/elem1.jpg" alt="Left Aligned" />
          </div>
          <div className="text-container">
            <p>
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </p>
          </div>
        </div>

        <div className="content-row reverse">
          <div className="image-container">
            <h3 style={{ marginLeft: "55%" }}>Right Aligned</h3>
            <img src="/Images/Home/elem1.jpg" alt="Right Aligned" />
          </div>
          <div className="text-container">
            <p style={{ marginLeft: "-6%" }}>
              Over time, even the most sophisticated, memory packed computer can
              begin to run slow if we don’t do something to prevent it. The
              reason why has less to do with how computers are made and how they
              age and more to do with the way we use them. You see, all of the
              daily tasks that we do on our PC from running programs to
              downloading and deleting software can make our computer sluggish.
              To keep this from happening, you need to understand the reasons
              why your PC is getting slower and do something to keep your PC
              running at its best. You can do this through regular maintenance
              and PC performance optimization programs Before we discuss all of
              the things that could be affecting your PC’s performance, let’s
              talk a little about what symptoms
            </p>
          </div>
        </div>
      </section>
      <hr
        class="section-divider2"
        style={{
          marginLeft: "11.5%",
          color: "grey",
          width: "76%",
          border: "none",
          borderTop: "0.1px solid grey",
          marginTop: "6%",
        }}
      />
      <section className="definition-section">
        <h2 className="section-heading">Definition</h2>
        <div className="definition-list">
          <div className="definition-item">
            <h4 className="definition-title">Definition 01</h4>
            <p>
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks
            </p>
          </div>
          <div className="definition-item">
            <h4 className="definition-title">Definition 02</h4>
            <p>
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks
            </p>
          </div>
          <div className="definition-item">
            <h4 className="definition-title">Definition 03</h4>
            <p>
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks
            </p>
          </div>
        </div>
      </section>
      <hr
        class="section-divider2"
        style={{
          marginLeft: "11.5%",
          color: "grey",
          width: "76%",
          border: "none",
          borderTop: "0.1px solid grey",
          marginTop: "6%",
        }}
      />
      <section className="blockquote-section">
        <h2 className="section-heading">Block Quotes</h2>
        <blockquote>
          “Recently, the US Federal government banned online casinos from
          operating in America by making it illegal to transfer money to them
          through any US bank or payment system. As a result of this law, most
          of the popular online casino networks such as Party Gaming and
          PlayTech left the United States. Overnight, online casino players
          found themselves being chased by the Federal government. But, after a
          fortnight, the online casino industry came up with a solution and new
          online casinos started taking root. These began to operate under a
          different business umbrella, and by doing that, rendered the transfer
          of money to and from them legal. A major part of this was enlisting
          electronic banking systems that would accept this new clarification
          and start doing business with me. Listed in this article are the
          electronic banking”
        </blockquote>
      </section>
      <hr
        class="section-divider2"
        style={{
          marginLeft: "11.5%",
          color: "grey",
          width: "76%",
          border: "none",
          borderTop: "0.1px solid grey",
          marginTop: "6%",
        }}
      />
      <section className="table-section">
        <h2 className="section-heading">Table</h2>
        <table className="country-table">
          <thead>
            <tr>
              <th>#</th>
              <th>COUNTRIES</th>
              <th>VISITS</th>
              <th>PERCENTAGES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>
                <img src="/Images/Home/flg1.webp" alt="Canada" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar blue" style={{ width: "60%" }}></span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>
                <img src="/Images/Home/flg2.jpg" alt="USA" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar red" style={{ width: "20%" }}></span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>
                <img src="/Images/Home/flg3.jpg" alt="UK" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar orange" style={{ width: "40%" }}></span>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>
                <img src="/Images/Home/flg4.webp" alt="Germany" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar green" style={{ width: "45%" }}></span>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>
                <img src="/Images/Home/flg5.jpg" alt="Australia" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar green" style={{ width: "30%" }}></span>
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>
                <img src="/Images/Home/flg6.webp" alt="China" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar blue" style={{ width: "50%" }}></span>
              </td>
            </tr>
            <tr>
              <td>07</td>
              <td>
                <img src="/Images/Home/flg7.webp" alt="Bangladesh" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar purple" style={{ width: "25%" }}></span>
              </td>
            </tr>
            <tr>
              <td>08</td>
              <td>
                <img src="/Images/Home/flg8.webp" alt="Belgium" /> Canada
              </td>
              <td>645032</td>
              <td>
                <span className="bar red" style={{ width: "45%" }}></span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="gallery-section">
        <div class="gallery-column">
          <h2 className="gallery-heading">Image Gallery</h2>

          {/* Row 1: 3 Images */}
          <div className="gallery-row row-1">
            <img src="/Images/Home/gal1.jpg" alt="Gallery 1" />
            <img src="/Images/Home/gal2.jpg" alt="Gallery 2" />
            <img src="/Images/Home/gal3.jpg" alt="Gallery 3" />
          </div>

          {/* Row 2: 2 Images */}
          <div className="gallery-row row-2">
            <img src="/Images/Home/gal4.jpg" alt="Gallery 4" />
            <img src="/Images/Home/gal5.jpg" alt="Gallery 5" />
          </div>

          {/* Row 3: 3 Images */}
          <div className="gallery-row row-3">
            <img src="/Images/Home/gal6.jpg" alt="Gallery 6" />
            <img src="/Images/Home/gal7.jpg" alt="Gallery 7" />
            <img src="/Images/Home/gal8.jpg" alt="Gallery 8" />
          </div>
        </div>
      </section>
      <div class="section-container">
        <div class="section-column">
          <h2>Image Gallery</h2>
          <h1>This is header 01</h1>
          <h2 class="header2">This is header 02</h2>
          <h3>This is header 03</h3>
          <h4>This is header 04</h4>
          <h5>This is header 01</h5>
          <h6>This is header 01</h6>
        </div>

        <div class="section-column">
          <h2>Unordered List</h2>
          <ul>
            <li>Fta Keys</li>
            <li>For Women Only Your Computer Usage</li>
            <li>Facts Why Inkjet Printing Is Very Appealing</li>
            <li>
              <li>Addiction When Gambling Becomes</li>
              <ul>
                <li>Protective Preventative Maintenance</li>
              </ul>
            </li>
            <li>Dealing With Technical Support 10 Useful Tips</li>
            <li>Make Myspace Your Best Designed Space</li>
            <li>Cleaning And Organizing Your Computer</li>
          </ul>
        </div>

        <div class="section-column">
          <h2>Ordered List</h2>
          <ol>
            <li>Fta Keys</li>
            <li>For Women Only Your Computer Usage</li>
            <li>Facts Why Inkjet Printing Is Very Appealing</li>
            <ol>
              <li>Addiction When Gambling Becomes</li>
              <ol>
                <li>Protective Preventative Maintenance</li>
              </ol>
            </ol>
            <li>Dealing With Technical Support 10 Useful Tips</li>
            <li>Make Myspace Your Best Designed Space</li>
            <li>Cleaning And Organizing Your Computer</li>
          </ol>
        </div>
      </div>
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
      );
    </>
  );
};

export default Element;
