import React, { useState } from 'react'

export default function ContactForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div className="inputs-wrapper">
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    required
                />
                <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    required
                />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
                    required
                />
            </div>
            <textarea 
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={event => setMessage(event.target.value)}
                required
            ></textarea>
            <button type="submit">Send Message</button>
        </form>
    )
}