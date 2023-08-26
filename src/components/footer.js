import React from "react";
import logo from "../images/misc/logo-white.png";
import "./footer.css";
export default function Footer() {
  return (
    <section className="four">
      <div className="overlay">
        <div className="fcontainer">
          <div className="touch">
            <img src={logo} alt="" width={170} height={90} />
            <p className="footertext">
              Jaago bharat is a non profit organization working from 2014 across
              the Noida and NCR region. We mainly focused on solving
              environmental issue and social welfare concerns such as wet waste
              management, plastic waste and water conservation.
            </p>
          </div>
          <div className="touch">
            <h2 className="fheading">Get in touch</h2>
            <hr />
            <ul>
              <li>Mr. Parth Gautam- 7678697168 (Team Leader)</li>
              <li>Mr. Chirag Batra - 9899668723 (Team Leader)</li>
              <li>Ms. Amisha Mehta- 9167855663 (HR member)</li>
            </ul>
          </div>
          <div className="touch">
            <h2 className="fheading">Support Links</h2>
            <hr />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Gallery</a>
              </li>
            </ul>
          </div>
          <div className="touch">
            <h2 className="fheading">Reach Us</h2>
            <hr />
            <ul>
              <li>Address</li>
              <li>Mobile No.</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
        <div className="links">
          <h2>© All Rights Reserved Jaago Bharat Foundation</h2>
        </div>
      </div>
    </section>
  );
}
