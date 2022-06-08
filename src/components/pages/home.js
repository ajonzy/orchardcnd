import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from "../../../static/assets/images/logo.png"
import Nurse from "../../../static/assets/images/nurse-generic.png"
import Trent from "../../../static/assets/images/trent-faculty.png"
import Loading from "../../../static/assets/images/loading.gif"

export default function Home(props) {
    const renderClasses = () => {
        const currentYear = new Date().getFullYear()

        return Object.keys(props.classesData).length > 0
        ? props.classesData.sort((a,b) =>`${a.month} ${a.start_date}, ${a.year}` -`${b.month} ${b.start_date}, ${b.year}`).map(classData => (
            <div className="class-info-wrapper">
                <div className="class-info" key={`classInfo-${classData.id}`}>
                    <p className='info'>{classData.month} {classData.start_date}{classData.year != currentYear ? `, ${classData.year}` : null}</p>
                    <p className={`availabliity ${30 - classData.signups > 0 ? "open" : "full"}`}>{30 - classData.signups > 0 ? "Open" : "Full"}</p>
                </div>
                <p>Lectures: {classData.lecture_time}</p>
                <p>Clinicals: {classData.clinical_time}</p>
            </div>
        ))
        : <img src={Loading} alt="Loading..." /> 
    }

    return (
        <div className='home-wrapper page-wrapper'>
            <div className="header-wrapper">
                <img src={Logo} alt="logo" />
                <h3>766 South 400 East Orem, Ut. Suite 203</h3>
                <h3>(801) 358-2102</h3>
            </div>
            <div className="about-blocks-wrapper block-wrapper">
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
            <div className="learn-more-wrapper block-wrapper button-wrapper">
                <Link to="/about">Learn More</Link>
            </div>
            <div className="upcoming-classes-wrapper block-wrapper">
                <h2>Upcoming Classes</h2>
                <p>All classes are 104 hours long</p>
                <p>A current TB test, covid vaccination card and a set of scrubs will be required for clinicals</p>
                {renderClasses()}
            </div>
            <div className="register-now-wrapper block-wrapper button-wrapper">
                <Link to="/register">Register Now</Link>
            </div>
        </div>
    )
}