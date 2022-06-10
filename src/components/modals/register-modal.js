import React, { useState } from 'react'
import Modal from 'react-modal';

import RegisterForm from '../forms/register-form';
import PaymentForm from '../forms/payment-form';
import ReviewForm from '../forms/review-form';

export default function RegisterModal(props) {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalSection, setModalSection] = useState("studentForm")
    const [studentData, setStudentData] = useState({})
    const [paymentData, setPaymentData] = useState({})

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
        setModalSection("studentForm")
        setStudentData({})
        setPaymentData({})
        setIsOpen(false);
    }

    const handleStudentDataSubmit = data => {
        setStudentData(data)
        setModalSection("paymentForm")
    }

    const handlePaymentDataSubmit = data => {
        setPaymentData(data)
        setModalSection("confirmForm")
    }

    const handleConfirmSubmit = () => setModalSection("successForm")

    const renderForm = () => {
        switch (modalSection) {
            case "studentForm": return <RegisterForm handleSubmit={handleStudentDataSubmit} />
            case "paymentForm": return <PaymentForm handleSubmit={handlePaymentDataSubmit} getKeys={props.getKeys} />
            case "confirmForm": return <ReviewForm handleSubmit={handleConfirmSubmit} class={props.class} studentData={studentData} paymentData={paymentData} />
            case "successForm": return (
                <div className='success-wrapper'>
                    <h3>Registration Success!</h3>
                    <p>You are registered for the {props.class.month} {props.class.start_date}, {props.class.year} class. You may now close this window.</p>
                    <button onClick={closeModal}>Close</button>
                </div>
            )
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
                {renderForm()}
            </Modal>
        </div>
    )
}