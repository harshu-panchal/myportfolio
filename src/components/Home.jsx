import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import myImage from '/images/my_image.png'

const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div className="logo-and-content">
          <div className="image">
            <img className='my-image' src={myImage} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <span className='heading'>Hello</span>
            </div>
            <div className='low-line-height'>
              <div className="sub-heading">
                <span>Let's Create Something Amazing Together!</span>
              </div>
              <div className="bio">
                <span >A motivated and detail-oriented Computer Science graduate seeking to leverage my technical expertise in software development, data structures, and problem-solving skills to contribute to innovative projects in a collaborative environment.</span>
              </div>
            </div>
            <div className="btn-container">
            <div className="buttons">
              <NavLink to="/portfolio/Resume"><li className='buttonn color-yellow'><span className='sub-heading'>Resume</span></li></NavLink>
              <NavLink to="/portfolio/Projects"><li className='buttonn color-orange'><span className='sub-heading'>Projects</span></li></NavLink>
              <NavLink to="/portfolio/Contact"><li className='buttonn color-pink'><span className='sub-heading'>Contact</span></li></NavLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
