import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../../static/assets/images/logo.png"
import Nurse from "../../../static/assets/images/nurse-generic.png"
import Trent from "../../../static/assets/images/trent-faculty.png"

export default function Home(props) {
    return (
        <div className='home-wrapper page-wrapper'>
            <div className="header-wrapper">
                <img src={Logo} alt="logo" />
                <h3>766 South 400 East Orem, Ut. Suite 203</h3>
                <h3>(801) 358-2102</h3>
            </div>
            <div className="about-blocks-wrapper">
                <div className="block block-one">
                    <div className="block-text">
                        <h2>Who Are We?</h2>
                        <p>OrchardCNA has been a part of the healthcare community for more than 20 years.  Our all-inclusive CNA classes provide students with everything necessary to prepare them to successfully pass the Utah State CNA exam. That is our mission.</p>
                        <p>We offer great classes from an instructor with over 30 of medical experience and 20 years as an educator. OrchardCNA offers a new class each month and has never had to cancel a class. With our convenient location, we are easily accessible just off State Street in Orem. We meet all state and federal education requirements.</p>
                    </div>
                    <div className="block-image">
                        <img src={Nurse} alt="" />
                    </div>
                </div>
                <div className="block block-two">
                    <div className="block-image">
                        <img src={Trent} alt="" />
                    </div>
                    <div className="block-text">
                        <h2>Faculty</h2>
                        <h3>Trenton Tuft</h3>
                        <p>The program is overseen by Trenton Tuft RN, our Program Coordinator and Primary Instructor who is approved by the Utah Nursing Assistant Registry.</p>
                        <p>“I have been in health care for 35 years.  I started in long term care and have held many positions.  I have been teaching for 20 years and love being involved in helping you at this stage of your medical career.”</p>
                    </div>
                </div>
            </div>
            <div className="learn-more-wrapper">
                <Link to="/about">Learn More</Link>
            </div>
        </div>
    )
}