import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from "../../../static/assets/images/logo-white.png"

export default function Navbar(props) {
    if (props.type === "dropdown") {
        window.addEventListener("scroll", event => {
            if (document.documentElement.scrollTop > 90) {
                document.getElementById("navbar-dropdown").style.top = "0";
                document.getElementById("navbar-dropdown").style.opacity = "100";
                document.getElementById("navbar-dropdown").style.transition = ".5s ease-in";
            } else if (document.documentElement.scrollTop === 0) {
                document.getElementById("navbar-dropdown").style.top = "-90px";
                document.getElementById("navbar-dropdown").style.opacity = "0";
                document.getElementById("navbar-dropdown").style.transition = "0s";
            }
        })
    }

    return (
        <div className="navbar-wrapper" id={`navbar-${props.type}`}>
            <img src={Logo} alt="Logo" />
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    )
}