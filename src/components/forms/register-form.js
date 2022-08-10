import React, { useState } from 'react'
import { AsYouType } from 'libphonenumber-js'

export default function RegisterForm(props) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit({
            firstName,
            lastName,
            email,
            phone
        })
    }

    const handlePhoneChange = event => {
        let value = event.target.value
        if (value.search(/\(\d{3}$/) !== -1) value = value.slice(0, -1).replace("(", "")

        setPhone(new AsYouType("US").input(value))
    }

    return (
        <form className='register-form' onSubmit={handleSubmit}>
            <h2>Registration Info</h2>
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
                    onChange={handlePhoneChange}
                    pattern=".*\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})"
                    required
                />
            </div>
            <button>Continue to Payment</button>
        </form>
    )
}