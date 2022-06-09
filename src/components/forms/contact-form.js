import React, { useState } from 'react'

import Loading from '../utils/loading'

export default function ContactForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()

        setLoading(true)
        setAlert("")
        setError(false)

        fetch("https://orchardcdnapi.herokuapp.com/message/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                setAlert("Message Sent!")
                setFirstName("")
                setLastName("")
                setEmail("")
                setPhone("")
                setMessage("")
            }
            else {
                setAlert("An unexpected error occured... Please try again later.")
                setError(true)
                console.log("Error while posting message: ", data.message)
            }
            setLoading(false)
        })
        .catch(error => {
            setAlert("An unexpected error occured... Please try again later.")
            setError(true)
            console.log("Error while posting message: ", error)
            setLoading(false)
        })
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
            <button type="submit" disabled={loading}>Send Message</button>
            <div className="alert-wrapper">
                { loading ? <Loading /> : null }
                <p style={ error ? { color: "red" } : {} }>{alert}</p>
            </div>
        </form>
    )
}