import React, { useState } from 'react'
import {
    SquarePaymentForm,
    CreditCardNumberInput,
    CreditCardExpirationDateInput,
    CreditCardPostalCodeInput,
    CreditCardCVVInput,
    CreditCardSubmitButton
} from 'react-square-payment-form'
import 'react-square-payment-form/lib/default.css'

export default function (props) {
    const [errors, setErrors] = useState([])

    const cardNonceResponseReceived = (errors, nonce, buyerVerificationToken) => {
        if (errors) {
            console.log("Error creating nonce, ", errors)
            setErrors(errors.map(error => error.message))
            return
        }
    
        props.handleSubmit({
            nonce,
            buyerVerificationToken,
            amount: 475
        })
    }
    
    const createVerificationDetails = () => {
        return {
            amount: '475.00',
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: {
                familyName: "Jones",
                givenName: "Alex",
                email: "email@gmail.com",
                country: "US",
                city: "Seattle",
                addressLines: ["555 Main St"],
                postalCode: "555555",
                phone: "555 555 5555"
            }
        }
    }

    return (
        <div className="payment-form">
            <h2>Payment Info</h2>
            <SquarePaymentForm
                sandbox={true}
                applicationId={props.getKeys().SQUARE_APPLICATION_ID}
                locationId={props.getKeys().SQUARE_LOCATION_ID}
                cardNonceResponseReceived={cardNonceResponseReceived}
                createVerificationDetails={createVerificationDetails}
            >
                <fieldset className="sq-fieldset">
                    <CreditCardNumberInput />
                    <div className="sq-form-third">
                        <CreditCardExpirationDateInput />
                    </div>

                    <div className="sq-form-third">
                        <CreditCardPostalCodeInput />
                    </div>

                    <div className="sq-form-third">
                        <CreditCardCVVInput />
                    </div>
                </fieldset>

                <CreditCardSubmitButton>
                    Review and Checkout
                </CreditCardSubmitButton>

                <div className="errors-wrapper">
                    {errors.map(error => <p style={{ color: "red" }}>{error}</p>)}
                </div>
            </SquarePaymentForm>
        </div>
    )
}