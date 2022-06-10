import React, { useState } from 'react'

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
                    onChange={event => setPhone(event.target.value)}
                    required
                />
            </div>
            <button>Continue to Payment</button>
        </form>
    )
}