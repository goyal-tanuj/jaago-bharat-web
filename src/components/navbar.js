import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/misc/logo.png";
import "./navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
  const [dropclick, setdropclick] = useState(true);
  const clickfunction = function () {
    setdropclick(!dropclick);
  };

  const [dropclick1, setdropclick1] = useState(true);
  const clickfunction1 = function () {
    setdropclick1(!dropclick1);
  };

  const [dropclick2, setdropclick2] = useState(true);
  const clickfunction2 = function () {
    setdropclick2(!dropclick2);
  };

  const [showmediaicons, setshowmediaicons] = useState(false);
  const myFunction = function () {
    setshowmediaicons(!showmediaicons);
  };
  useEffect(() => {
    setdropclick(true);
    setdropclick1(true);
    setdropclick2(true);
  }, [showmediaicons]);

  const [changelink, setchangelink] = useState(false);
  const linkfunction = function () {
    setchangelink(!changelink);
  };
  useEffect(() => {
    setshowmediaicons(false);
  }, [changelink]);

  return (
    <section className="one">
      <nav className={"mainnav changings"}>
        <div className="logo">
          <Link onClick={linkfunction} to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div
          className={
            showmediaicons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li className={dropclick ? "dropclass" : "drop"}>
              <Link onClick={linkfunction} to="/Who we are">
                Who We Are{" "}
              </Link>
              <span className="icondrop" style={{ color: "white" }}>
                {" "}
                <IoMdArrowDropdown />
              </span>
              <button onClick={clickfunction}>
                {dropclick ? <IoIosArrowDropdown /> : "x"}
              </button>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link onClick={linkfunction} to="/Our story">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Our Founders">
                      Our Founder
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Our team">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={dropclick1 ? "dropclass" : "drop1"}>
              <Link onClick={linkfunction} to="/What we do">
                What We Do{" "}
              </Link>
              <span className="icondrop" style={{ color: "white" }}>
                <IoMdArrowDropdown />
              </span>
              <button onClick={clickfunction1}>
                {dropclick1 ? <IoIosArrowDropdown /> : "x"}
              </button>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link onClick={linkfunction} to="/An overview">
                      An Overview
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Eco brick">
                      Eco-Brick
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Wet-Waste-Management">
                      Wet Waste Management
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Water-conservation">
                      Water Conservation
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/SMILE">
                      Project S.M.I.L.E
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link onClick={linkfunction} to="/Partners">
                Partners
              </Link>
            </li>
            <li className={dropclick2 ? "dropclass" : "drop2"}>
              <Link onClick={linkfunction} to="#">
                Resources{" "}
              </Link>
              <span className="icondrop" style={{ color: "white" }}>
                <IoMdArrowDropdown />
              </span>
              <button onClick={clickfunction2}>
                {dropclick2 ? <IoIosArrowDropdown /> : "x"}
              </button>
              <div className="dropdown">
                <ul>
                  <li>
                    <Link onClick={linkfunction} to="/AnnualReport">
                      Annual report
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Gallery">
                      Our Gallery
                    </Link>
                  </li>
                  <li>
                    <Link onClick={linkfunction} to="/Achievements">
                      Achievements
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link onClick={linkfunction} to="/Blog">
                Blog
              </Link>
            </li>
            
          </ul>
          <div className="icon">
            <Link to="#" onClick={myFunction}>
              {showmediaicons ? <RxCross2 /> : <RxHamburgerMenu />}
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
