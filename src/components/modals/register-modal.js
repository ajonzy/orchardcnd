import React, { useState } from 'react'
import Modal from 'react-modal';

import RegisterForm from '../forms/register-form';
import PaymentForm from '../forms/payment-form';
import ReviewForm from '../forms/review-form';

export default function RegisterModal(props) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalSection, setModalSection] = useState(0)
    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })
    const [paymentData, setPaymentData] = useState({
        amount: 0,
        buyerVerificationToken: {
            card_brand: "",
            last_4: ""
        }
    })

    const modalStyles = {
        overlay: {
            zIndex: "10000"
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: "80%",
            width: "557px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
      
    Modal.setAppElement(document.querySelector(".app-wrapper"));

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setModalSection(0)
        setStudentData({
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        })
        setPaymentData({
            amount: 0,
            buyerVerificationToken: {
                card_brand: "",
                last_4: ""
            }
        })
        setIsOpen(false);
    }

    const handleStudentDataSubmit = data => {
        setStudentData(data)
        setModalSection(1)
    }

    const handlePaymentDataSubmit = data => {
        setPaymentData(data)
        setModalSection(2)
    }

    const handleConfirmSubmit = () => setModalSection(3)

    const handleBack = () => setModalSection(modalSection - 1)    

    const frameStyles = () => {
        switch(modalSection) {
            case 0: return "translateX(0%)"
            case 1: return "translateX(calc(-25% - 2px))"
            case 2: return "translateX(calc(-50% - 2px))"
            case 3: return "translateX(calc(-75% - 2px))"
        }
    }

    return (
        <div className='register-modal-wrapper'>
            <button onClick={openModal}>Register</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-forms-wrapper">
                    <div className="modal-forms-frame" style={{ transform: frameStyles() }}>
                        <RegisterForm handleSubmit={handleStudentDataSubmit} />
                        <PaymentForm handleSubmit={handlePaymentDataSubmit} handleBack={handleBack} getKeys={props.getKeys} />
                        <ReviewForm handleSubmit={handleConfirmSubmit} handleBack={handleBack} class={props.class} studentData={studentData} paymentData={paymentData} />
                        <div className='success-wrapper'>
                            <h3>Registration Success!</h3>
                            <p>You are registered for the {props.class.month} {props.class.start_date}, {props.class.year} class. You may now close this window.</p>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}