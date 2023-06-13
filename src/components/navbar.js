import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.png'
import './navbar.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import {IoIosArrowDropdown} from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import {RxCross2} from 'react-icons/rx';
export default function Navbar()
{
  const [dropclick, setdropclick] = useState(true)
  const clickfunction=function(){
    setdropclick(!dropclick);
  }
  
  const [dropclick1, setdropclick1] = useState(true)
  const clickfunction1=function(){
    setdropclick1(!dropclick1);
  }
  
  const [dropclick2, setdropclick2] = useState(true)
  const clickfunction2=function(){
    setdropclick2(!dropclick2);
  }
  
  const [dropclick3, setdropclick3] = useState(true)
  const clickfunction3=function(){
    setdropclick3(!dropclick3);
  }
  const [showmediaicons, setshowmediaicons] = useState(false)
  const myFunction = function ()
  {
    setshowmediaicons(!showmediaicons);
  }
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(false);
      }
      else {
          setColorchange(true);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <section className="one">
      <nav className={colorChange? "mainnav":"mainnav changings"}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className={showmediaicons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className={dropclick ?"dropclass":"drop"}>
              <Link to="/Main1" >Who we are<span className="icondrop"><IoMdArrowDropdown /></span>
               <button onClick={clickfunction}>
                {dropclick ?<IoIosArrowDropdown/>:"x"}</button></Link >
              <div className="dropdown">
                <ul>
                  <li><Link to='/Main2'>Our story</Link ></li>
                  <li><Link to='/Main4'>Our founder</Link ></li>
                  <li><Link to='#'>Our team</Link ></li>
                </ul>
              </div>
            </li>
            <li className={dropclick1 ?"dropclass":"drop1"}>
              <Link to="/Main6" >What we do<span className="icondrop"><IoMdArrowDropdown /></span><
                button onClick={clickfunction1}>{ dropclick1?<IoIosArrowDropdown/>:"x"}</button></Link >
              <div className="dropdown">
                <ul>
                  <li><Link to='#'>An overview</Link ></li>
                  <li><Link to='#'>Eco-brick</Link ></li>
                  <li><Link to='#'>Wet waste management</Link ></li>
                  <li><Link to='#'>water conservation</Link ></li>
                  <li><Link to='#'>project s.m.i.l.e</Link ></li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="#" >Partners</Link >
            </li> <li className={dropclick2 ?"dropclass":"drop2"}>
              <Link to="#" >Resources <span className="icondrop"><IoMdArrowDropdown /></span><
                button onClick={clickfunction2}>{dropclick2?<IoIosArrowDropdown/>:"x"}</button></Link >
              <div className="dropdown">
                <ul>
                  <li><Link to='#'>Annual report</Link ></li>
                  <li><Link to='#'>Our publications</Link ></li>
                  <li><Link to='#'>Our gallery</Link ></li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="#" >Get Involved</Link >
            </li>
            <li className={dropclick3 ?"dropclass":"drop3"}>
              <Link to="#" >Support us <span className="icondrop"><IoMdArrowDropdown /></span>
              <button onClick={clickfunction3}>{dropclick3?<IoIosArrowDropdown/>:"x"}</button></Link >
              <div className="dropdown">
                <ul>
                  <li><Link to='#'>Donate</Link ></li>
                </ul>
              </div>
            </li>
          </ul>
          <div  className="icon">
            <Link to="#" href="javascript:void(0);"
              onClick={myFunction}>{showmediaicons ? <RxCross2/> : <RxHamburgerMenu/>}</Link >
          </div>
        </div>
      </nav>
    </section>
  )
}
