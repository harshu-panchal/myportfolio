import React from 'react'
import './Skills.css'

const Skills = () => {
    return (

        <>
            <div className="skills-cont">
                <div className="exp-cont-heading">
                    <span>Skills & Expertise</span>
                </div>
                <div className="skill-content">
                    
                    <div className='contant'>
                        <div className="exp-head sub-heading">
                        Languages and Databases
                        </div>
                        <div className="exp-info bio">
                        Python, C++, C, JavaScript, MySQL
                        </div>
                    </div>
                    <div className='contant'>
                        <div className="exp-head sub-heading">
                        Web Development
                        </div>
                        <div className="exp-info bio">
                        HTML, CSS, JavaScript, Python (Flask)
                        </div>
                    </div>
                    <div className='contant'>
                        <div className="exp-head sub-heading">
                        Software Development
                        </div>
                        <div className="exp-info bio">
                        Object Oriented Programming, Data Structures and Algorithms
                        </div>
                    </div>
                    <div className='contant'>
                        <div className="exp-head sub-heading">
                        Data Science
                        </div>
                        <div className="exp-info bio">
                        PowerBI
                        </div>
                    </div>
                </div>
            </div>

            <div className="btwn-line">
            </div>
        </>
    )
}

export default Skills
