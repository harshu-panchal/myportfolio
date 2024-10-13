import React from 'react'
import './Projects.css'
import legalimg from '/images/legal_doc_generator.png'
import picflip from '/images/pic_flip_card.png'
import stdntrec from '/images/student_record_management.png'


const Projects = () => {
  return (
    <>
      <div className="resume-container">
        <div className="resume-heading">
          <span className='word'>Projects</span>
          <div className='low-width'>
        <a target='blank_' href="https://github.com/harshu-panchal"><p className="github-btn">GitHub</p></a></div>
        </div>
        
        <div className="projects-container">
          <div className="project-contant">
            <div className="project-heading exp-cont-heading">
              <span>Automatic Legal Document Generator</span>
            </div>
            <div className="project-desc bio">
              <span>Built a ChatBot named Automatic Legal Document Generator, that generates legal documents based on user queries. The bot collects the user's Aadhar number and swiftly produces the required legal document within seconds, streamlining legal documentation processes.</span>
            </div>
          </div>
          <div className="project-photo">
            <img className='legalAI' src={legalimg} alt="" />
          </div>
        </div>
        <div className="projects-container">
          <div className="project-contant">
            <div className="project-heading exp-cont-heading">
              <span>Student Record Manager</span>
            </div>
            <div className="project-desc bio">
              <span>Developed a Student Record Management System, a data-driven system for efficient storage and management of student records using data science fundamentals. Enabled streamlined data organization, retrieval, andanalysis to improve decision-making and record-keeping.</span>
            </div>
          </div>
          <div className="project-photo">
            <img className='legalAI' src={stdntrec} alt="" />
          </div>
        </div>
        <div className="projects-container">
          <div className="project-contant">
            <div className="project-heading exp-cont-heading">
              <span>Pic Flip Card Game</span>
            </div>
            <div className="project-desc bio">
              <span>Crafted a Pic Flip Card Game a GUI-based memory game where players match pairs of cards. The game enhances memory and cognitive skills by requiring players to recall card positions and match identical pairs.</span>
            </div>
          </div>
          <div className="project-photo3">
            <img className='pic-flip-img' src={picflip} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
