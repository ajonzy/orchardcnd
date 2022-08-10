import React from 'react'
import { Link } from 'react-router-dom'

import Student from "../../../static/assets/images/student-generic.png"

export default function About(props) {
    return (
        <div className='about-page-wrapper page-wrapper'>
            <div className="our-mission-wrapper section-wrapper">
                <h2 className='page-header'>Our Mission</h2>
                <p>Orchard CNA Training Centers welcomes applications from all qualified individuals. Equal educational opportunities are offered to all who meet entrance requirements, without regard to race, gender, ethnicity, creed, marital status or age.</p>
            </div>
            <div className="class-requirements-wrapper section-wrapper">
                <h2>Class Requirements</h2>
                <p>All students must be 16 years of age or older, exhibit competency in reading, writing, and understanding the English language and must submit a completed application and preadmission survey.</p>
                <img src={Student} alt="" />
            </div>
            <div className="our-services-wrapper section-wrapper">
                <h2>The Program</h2>
                <div className="service-block">
                    <h4>OUR CURRICULUM</h4>
                    <p>Our Utah CNA Training Program is an 104 clock hour program. Classroom instruction includes an introduction to healthcare, basic nursing skills, body structure and function, infection control, CPR, and the job-seeking process. Students also participate in supervised clinical activities. Upon successful completion of the program, students are eligible to take the Utah CNA certification examination.</p>
                </div>
                <div className="service-block">
                    <h4>CLINICAL ACTIVITIES</h4>
                    <p>Clinical activities are designed to allow the student to apply the skills learned in the classroom to an actual clinical setting. Students demonstrate an understanding of nursing principles that ensure safe, knowledgeable, skilled care and, under the supervision of the instructor, provide this care to assigned clients. (24 hours – schedule to be determined by the Program Coordinator).</p>
                </div>
                <div className="service-block">
                    <h4>OUR FACILITY AND FACULTY</h4>
                    <p>Our classroom facility is located at 766 South 400 East in Orem, Ut. Suite 203. The program is overseen by Trenton Tuft RN, our Program Coordinator and Primary Instructor who is approved by the Utah Nursing Assistant Registry. The textbooks are provided for each student. Each classroom is supplied with equipment, such as hospital beds, wheelchairs, lifts and medical supplies to provide hands on training. Audio and visual training aids are also used as part of the classroom instruction. (76 Hours)</p>
                </div>
                <div className="service-block">
                    <h4>TUITION AND FEES</h4>
                    <p>Total course cost – <strong>$475.00</strong>. This includes a Refundable deposit of <strong>$50.00</strong>. This will hold your spot in the class. The remaining <strong>$425.00</strong> is due by the first day of class unless payment arrangements have been pre-arranged. Tuition includes the UNAR candidate handbook, All Printed Materials, Classroom instruction, Clinical Instruction,  and practice exams. The use of Textbooks, Stethoscopes, and sphygmomanometers. Tuition does not include the state certification fee.</p>
                </div>
                <div className="service-block">
                    <h4>CANCELLATION POLICY</h4>
                    <p>Should the student be terminated or cancel for any reason, all refunds will be made according to the following policy. Notice of Cancellation must be made in writing and can be delivered by mail, email or in person. Once a student registers for class and pays the required deposit, the student will receive a full refund, if a student notifies the school that he or she has decided not to attend class within three business days after the first class day. If a student drops out of the course before the first day of class, tuition may by be applied to a future class, or refunded if requested. However, if a student needs to drop the class after the third class day, tuition will be applied to another course to be taken within the next 2 months. A student may be dismissed at the discretion of the director. One warning will be given before dismissal. If a student is dismissed by the director, a pro-rated refund will be given based on the percent of class time attended. Students dismissed from the program may be eligible for readmission to another class during the next 6 months. Readmission will be based on the severity of the infraction and at the discretion of the Program Coordinator. Students with more than one dismissal will not be eligible for readmission.</p>
                </div>
                <div className="service-block">
                    <h4>ENROLLMENT QUALIFICATIONS</h4>
                    <p>Orchard CNA Training Centers welcomes applications from all qualified individuals. Equal educational opportunities are offered to all who meet entrance requirements, without regard to race, gender, ethnicity, creed, or marital status. All students must be 16 years of age or older, exhibit competency in reading, writing and understanding the English language and must submit a completed application and preadmission survey.</p>
                </div>
                <div className="service-block">
                    <h4>GRADUATION REQUIREMENTS</h4>
                    <p>Students must attend all classes and complete required clinical hours to be eligible to take the Utah CNA certification examination. A final exam will be given at the end of the course. Students must receive a minimum score of 85% to graduate from the program. Upon successful completion of the program, the school will assist each graduate with job placement. However, this does not mean the school guarantees the student employment. A certificate will be issued to each student who successfully completes the program and satisfies all requirements.</p>
                    <p>ORCHARD CNA TRAINING CENTERS MUST FORWARD IDENTIFYING INFORMATION TO THE STATE OF Utah TO VERIFY YOUR ELIGIBILITY TO COMPLETE THE CERTIFICATION EXAMINATIONS.</p>
                    <p>SUCCESSFUL COMPLETION OF THIS NURSING ASSISTANT TRAINING PROGRAM WILL ALLOW YOU TO SIT FOR THE STATE OF Utah ADMINISTERED COMPETENCY EXAMINATION IN ORDER TO BECOME A CERTIFIED NURSE ASSISTANT AS DEFINED BY STATE AND FEDERAL LAW.</p>
                </div>
            </div>
            <div className="register-now-wrapper section-wrapper button-wrapper">
                <Link to="/register">Register Now</Link>
            </div>
        </div>
    )
}