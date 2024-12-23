import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import snow from '/snowflake.png'


const Navbar = () => {
  function uncheck() {
    let checkboxx = document.querySelector('.checkbox')
    checkboxx.checked = false;
  }
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />




      <div className="navbar">
        <div className="logo">
          <NavLink to="/myportfolio/"><li className='list-element'><img className='logo-image' src={snow} alt="logo" /></li></NavLink>
          <NavLink to="/myportfolio/"><span className='logo-text' >Harshvardhan Panchal</span></NavLink>
          <span className='engineer Montserrat'>Engineer</span>
        </div>

        <div className="containerrr nav-containerrr">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <NavLink to="/myportfolio/" onClick={uncheck}><li className='-element'><span className="active-link material-symbols-outlined">home</span></li></NavLink>
            <NavLink to="/myportfolio/Resume" onClick={uncheck}><li className=' list-element'><span className="active-link Montserrat hover-me">Resume</span></li></NavLink>
            <NavLink to="/myportfolio/Projects" onClick={uncheck}><li className='list-element'><span className='active-link Montserrat hover-me'>Projects</span></li></NavLink>
            <NavLink to="/myportfolio/Contact" onClick={uncheck}><li className='list-element'><span className='active-link Montserrat hover-me'>Contact</span></li></NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/myportfolio/" ><li className='list-element'><span className="active-link material-symbols-outlined">home</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/myportfolio/Resume"><li className=' list-element'><span className="active-link Montserrat hover-me">Resume</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/myportfolio/Projects"><li className='list-element'><span className='active-link Montserrat hover-me'>Projects</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/myportfolio/Contact"><li className='list-element'><span className='active-link Montserrat hover-me'>Contact</span></li></NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
