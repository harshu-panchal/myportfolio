import React from 'react'
import './Footerr.css'
import insta from '/images/instagram.png'
import gitlogo from '/images/github.png'
import linkedinlogo from '/images/linkedin.png'

const Footerr = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-line">
                </div>
                
                <div className="footer-data">
                    <div className="detail">
                        <div className="head sub-heading"><span>Phone</span></div>
                        <div className="info bio">+916268423925</div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">Email</div>
                        <div className="info bio">harshvardhanpanc145@gmail.com</div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">Socials</div>
                        <div className="info bio"><a target=' blank_' href="https://www.linkedin.com/in/harshvardhan-panchal-1b6404243/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className='socials' src={linkedinlogo} alt="" /></a>
                            <a target='blank_' href="https://www.instagram.com/harshu_panchal__?igsh=dnAxbTAxbnNqbDhz"><img className='socials instagram' src={insta} alt="" /></a></div>
                    </div>
                    <div className="detail">
                        <div className="head sub-heading">GitHub</div>
                        <div className="info bio"><a target='blank_' href="https://github.com/harshu-panchal"><img className='socials' src={gitlogo} alt="" /></a></div>
                    </div>
                </div>


                <div className="creator-name bio">
                    <span>© 2024 By Harshvardhan Panchal.</span>
                </div>
            </div>
        </>
    )
}

export default Footerr
