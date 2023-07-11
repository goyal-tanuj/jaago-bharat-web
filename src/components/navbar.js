import React, { useState , useEffect} from 'react'
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
  useEffect(()=>{
    setdropclick(true)
    setdropclick1(true)
    setdropclick2(true)
    setdropclick3(true)
  },[showmediaicons]);

  const [changelink, setchangelink] = useState(false)
  const linkfunction =function(){
    setchangelink(!changelink);
  }
  useEffect(()=>{
    setshowmediaicons(false)},
    [changelink]
  );
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
          <Link  onClick={linkfunction} to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className={showmediaicons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li className={dropclick ?"dropclass":"drop"}>
              <Link  onClick={linkfunction} to="/Who we are" >Who we are </Link><span className="icondrop" style={{color:'white'}}>  <IoMdArrowDropdown /></span>
               <button onClick={clickfunction}>
                {dropclick ?<IoIosArrowDropdown/>:"x"}</button>
              <div className="dropdown">
                <ul>
                  <li><Link  onClick={linkfunction} to='/Our story'>Our story</Link></li>
                  <li><Link  onClick={linkfunction} to='/Our Founders'>Our founder</Link></li>
                  <li><Link  onClick={linkfunction} to='/Our team'>Our team</Link></li>
                </ul>
              </div>
            </li>
            <li className={dropclick1 ?"dropclass":"drop1"}>
              <Link  onClick={linkfunction} to="/What we do" >What we do </Link><span className="icondrop" style={{color:'white'}}><IoMdArrowDropdown /></span>
                <button onClick={clickfunction1}>{ dropclick1?<IoIosArrowDropdown/>:"x"}</button>
              <div className="dropdown">
                <ul>
                  <li><Link  onClick={linkfunction} to='/An overview'>An overview</Link></li>
                  <li><Link  onClick={linkfunction} to='/Eco brick'>Eco-brick</Link></li>
                  <li><Link  onClick={linkfunction} to='/Wet-Waste-Management'>Wet waste management</Link></li>
                  <li><Link  onClick={linkfunction} to='/Water-conservation'>water conservation</Link></li>
                  <li><Link  onClick={linkfunction} to='/SMILE'>project s.m.i.l.e</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link  onClick={linkfunction} to="/Partners" >Partners</Link>
            </li>
             <li className={dropclick2 ?"dropclass":"drop2"}>
              <Link  onClick={linkfunction} to="#" >Resources </Link><span className="icondrop" style={{color:'white'}}><IoMdArrowDropdown /></span><
                button onClick={clickfunction2}>{dropclick2?<IoIosArrowDropdown/>:"x"}</button>
              <div className="dropdown">
                <ul>
                  <li><Link  onClick={linkfunction} to='/AnnualReport'>Annual report</Link></li>
                  <li><Link  onClick={linkfunction} to='/Publications'>Our publications</Link></li>
                  <li><Link  onClick={linkfunction} to='/Gallery'>Our gallery</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link  onClick={linkfunction} to="/GetInvolved" >Get Involved</Link>
            </li>
            <li className={dropclick3 ?"dropclass":"drop3"}>
              <Link  onClick={linkfunction} to="#" >Support us </Link><span className="icondrop" style={{color:'white'}}><IoMdArrowDropdown /></span>
              <button onClick={clickfunction3}>{dropclick3?<IoIosArrowDropdown/>:"x"}</button>
              <div className="dropdown">
                <ul>
                  <li><Link  onClick={linkfunction} to='/Donate'>Donate</Link></li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="icon">
            <Link to="#" onClick={myFunction}>{showmediaicons ? <RxCross2/> : <RxHamburgerMenu/>}</Link>
            <Link  onClick={linkfunction} to="#" href="javascript:void(0);"
              onClick={myFunction}>{showmediaicons ? <RxCross2/> : <RxHamburgerMenu/>}</Link>
          </div>
        </div>
      </nav>
    </section>
  )
}
