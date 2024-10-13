import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import snow from '/images/snowflake.png'


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
          <NavLink to="/"><li className='list-element'><img className='logo-image' src={snow} alt="logo" /></li></NavLink>
          <NavLink to="/"><span className='logo-text' >Harshvardhan Panchal</span></NavLink>
          <span className='engineer Montserrat'>Engineer</span>
        </div>

        <div class="containerrr nav-containerrr">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="menu-items">
            <NavLink to="/portfolio/" onClick={uncheck}><li className='-element'><span className="active-link material-symbols-outlined">home</span></li></NavLink>
            <NavLink to="/portfolio/Resume" onClick={uncheck}><li className=' list-element'><span className="active-link Montserrat hover-me">Resume</span></li></NavLink>
            <NavLink to="/portfolio/Projects" onClick={uncheck}><li className='list-element'><span className='active-link Montserrat hover-me'>Projects</span></li></NavLink>
            <NavLink to="/portfolio/Contact" onClick={uncheck}><li className='list-element'><span className='active-link Montserrat hover-me'>Contact</span></li></NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/portfolio/" ><li className='-element'><span className="active-link material-symbols-outlined">home</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/portfolio/Resume"><li className=' list-element'><span className="active-link Montserrat hover-me">Resume</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/portfolio/Projects"><li className='list-element'><span className='active-link Montserrat hover-me'>Projects</span></li></NavLink>
          <li><span>|</span></li >
          <NavLink to="/portfolio/Contact"><li className='list-element'><span className='active-link Montserrat hover-me'>Contact</span></li></NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar
