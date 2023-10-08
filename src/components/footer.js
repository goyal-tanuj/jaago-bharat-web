import React from "react";
import logo from "../images/misc/logo-white.png";
import { Link } from "react-router-dom";
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
              <li>Akash Arya - 9582071411</li>
              <li>Abhinav Priyadarshi - 9534563317</li>
              <li>Neetu Keswani- 9811861985</li>
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
              <li><Link to="/Gallery">
                      Gallery
                    </Link></li>
            </ul>
          </div>
          <div className="touch">
            <h2 className="fheading">Get Involved</h2>
            <hr />
            <iframe title="form" src="https://docs.google.com/forms/d/e/1FAIpQLSdvIXaAxU-5rhZ3lIcB2Xh9Of2oURNWBhzUxKrf2ZFMMmnuqQ/viewform?embedded=true" frameborder="0" className="form" >Loading…</iframe>
          </div>
        </div>
        <div className="links">
          <h2>© All Rights Reserved Jaago Bharat Foundation</h2>
        </div>
      </div>
    </section>
  );
}
