import React from 'react'

export default function ReviewForm(props) {
    const handleSubmit = event => {
        event.preventDefault()

        props.handleSubmit()
    }

    return (
        <form className='review-form-wrapper' onSubmit={handleSubmit}>
            <h4>Class: {props.class.month} {props.class.start_date}, {props.class.year}</h4>
            <h4>First Name: {props.studentData.firstName}</h4>
            <h4>Last Name: {props.studentData.lastName}</h4>
            <h4>Email: {props.studentData.email}</h4>
            <h4>Phone: {props.studentData.phone}</h4>
            <h4>Amount: ${props.paymentData.amount.toFixed(2)}</h4>
            <h4>Card: {props.paymentData.buyerVerificationToken.card_brand} ending in {props.paymentData.buyerVerificationToken.last_4}</h4>
            <button type="submit">Confirm and Register</button>
        </form>
    )
}