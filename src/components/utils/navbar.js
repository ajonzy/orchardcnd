import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from "../../../static/assets/images/logo-white.png"

export default function Navbar(props) {
    return (
        <div className='navbar-wrapper'>
            <img src={Logo} alt="Logo" />
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}