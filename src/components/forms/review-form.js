import React, { useState } from 'react'

import Loading from '../utils/loading'

export default function ReviewForm(props) {
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState("")
    const [error, setError] = useState(false)
    const [errorAfterPayment, setErrorAfterPayment] = useState(false)

    const handleSubmit = event => {
        event.preventDefault()

        setLoading(true)
        setAlert("")
        setError(false)

        fetch("https://orchardcdnapi.herokuapp.com/payment", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                nonce: props.paymentData.nonce,
                buyerVerificationToken: props.paymentData.buyerVerificationToken,
                amount: props.paymentData.amount
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.payment) {
                fetch("https://orchardcdnapi.herokuapp.com/registration/add", {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        first_name: props.studentData.firstName,
                        last_name: props.studentData.lastName,
                        email: props.studentData.email,
                        phone: props.studentData.phone,
                        amount_paid: props.paymentData.amount,
                        event_id: props.class.id
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        props.handleSubmit()
                    }
                    else {
                        setError(true)
                        setErrorAfterPayment(true)
                        setAlert("FATAL: Unfortunately, an error occured after your payment was processed. Please contact us ASAP to resolve this issue.")
                        console.log("An error occured creating registration after payment: ", data.message)
                    }

                    setLoading(false)
                })
                .catch(error => {
                    setLoading(false)
                    setError(true)
                    setErrorAfterPayment(true)
                    setAlert("FATAL: Unfortunately, an error occured after your payment was processed. Please contact us ASAP to resolve this issue.")
                    console.log("An error occured creating registration after payment: ", error)
                })
            }
            else {
                setLoading(false)
                setError(true)
                setAlert("Unfortunately, an error occured and your payment was not processed... Please try again later.")
                console.log("An error occured during payment process: ", data)
            }
        })
        .catch(error => {
            setLoading(false)
            setError(true)
            setAlert("Unfortunately, an error occured and your payment was not processed... Please try again later.")
            console.log("An error occured during payment process: ", error)
        })
    }

    return (
        <form className='review-form' onSubmit={handleSubmit}>
            <h2>Review</h2>
            <div className="review-info">
                <h4>Class: {props.class.month} {props.class.start_date}, {props.class.year}</h4>
                <h4>First Name: {props.studentData.firstName}</h4>
                <h4>Last Name: {props.studentData.lastName}</h4>
                <h4>Email: {props.studentData.email}</h4>
                <h4>Phone: {props.studentData.phone}</h4>
                <h4>Amount: ${props.paymentData.amount.toFixed(2)}</h4>
                <h4>Card: {props.paymentData.buyerVerificationToken.card_brand} ending in {props.paymentData.buyerVerificationToken.last_4}</h4>
            </div>
            <button type="submit" disabled={loading || errorAfterPayment}>Confirm and Register</button>
            <div className="alert-wrapper">
                { loading ? <Loading /> : null }
                <p style={ error ? { color: "red" } : {} }>{alert}</p>
            </div>
        </form>
    )
}