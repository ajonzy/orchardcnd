import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import ContactForm from '../forms/contact-form'

import Lab from "../../../static/assets/images/lab-clipart.jpg"

export default function Contact(props) {
    return (
        <div className='contact-page-wrapper page-wrapper'>
            <div className="contact-info-wrapper section-wrapper">
                <h2 className='page-header'>We Want To Hear From You!</h2>
                <div className="contact-info-block">
                    <div className='icon'><FontAwesomeIcon icon={faPhone} /></div>
                    <h4>(801) 358-2102</h4>
                </div>
                <div className="contact-info-block">
                    <div className='icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                    <h4>orchardcna@outlook.com</h4>
                </div>
                <div className="contact-info-block">
                    <div className='icon'><FontAwesomeIcon icon={faBuilding} /></div>
                    <h4>766 South 400 East Orem, Ut. Suite 203</h4>
                </div>
            </div>
            <div className="contact-directions-wrapper">
                <p>Contact us using any of the above methods, or fill out the form below with any questions you may have, and we'll get back to you!</p>
            </div>
            <div className="contact-form-wrapper">
                <ContactForm/>
            </div>
            <img src={Lab} alt="" />
        </div>
    )
}