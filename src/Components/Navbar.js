import React, { useEffect, useState } from 'react'
import logoSvg from "../assets/images/navbar-logo.svg"
import arrowUpSvg from "../assets/images/arrow-up-navbar.svg"
import { BiMenu } from "react-icons/bi"
// import { Link } from "react-router-dom"
import "./index.css"

function Navbar() {
    const [corporatesDropdown, setCorporatesDropdown] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [onCurrentPage, setCurrentPage] = useState("")

    useEffect(() => {
        if (window.location.href.includes("/pulse-check-in")) {
            setCurrentPage("corporate-page")
        } else if (window.location.href.includes("/employee-engagement")) {
            setCurrentPage("corporate-page")
        } else if (window.location.href.includes("/predict-burnout")) {
            setCurrentPage("corporate-page")
        } else if (window.location.href.includes("/overall-wellness")) {
            setCurrentPage("corporate-page")
        } else {
            setCurrentPage("home")
        }
    })

    return (
        <div className='navbar-main'>
            <div className='container-main navbar-container'>
                <img src={logoSvg} alt="logo" />
                <div className='menu-navbar-container'>
                    <ul>
                        <li className={`hoveranimate ${onCurrentPage === "home" && "active"}`} onClick={() => {
                            window.location.href = "/"
                        }}>Home</li>
                        {/* <li className='hoveranimate active'><Link to="/">Home</Link></li> */}
                        <li className={onCurrentPage === "corporate-page" && "active"}>
                            <font onClick={() => setCorporatesDropdown(!corporatesDropdown)}>For Corpotates <img src={arrowUpSvg} style={{ marginLeft: 6 }} /></font>
                            <div className='dropdown-corporates' style={{ opacity: corporatesDropdown ? 1 : 0, pointerEvents: corporatesDropdown ? "all" : "none" }}>
                                <label onClick={() => {
                                    window.location.href = "/pulse-check-in"
                                }}>Pulse check-in</label>
                                <label onClick={() => {
                                    window.location.href = "/predict-burnout"
                                }}>Predict burnout</label>
                                <label onClick={() => {
                                    window.location.href = "/overall-wellness"
                                }}>Overall wellness</label>
                                <label onClick={() => {
                                    window.location.href = "/employee-engagement"
                                }}>Employee engagement</label>
                            </div>
                        </li>
                        <li className='hoveranimate'>Blog</li>
                    </ul>
                </div>
                <div className='left-navbar-container'>
                    <p>Login</p>
                    <button>Get Started</button>
                    <BiMenu className='menu-icon-navbar' onClick={() => {
                        if (mobileMenuOpen) {
                            document.getElementById("root").style.position = "static"
                        } else {
                            document.getElementById("root").style.position = "fixed"
                        }
                        setMobileMenuOpen(!mobileMenuOpen)
                    }} />
                </div>
            </div>
            <div className='menu-open-modal' style={{ right: mobileMenuOpen ? 0 : "-100%" }}>
                <label onClick={() => {
                    window.location.href = "/"
                }}>Home</label>
                <label>
                    <font onClick={() => setCorporatesDropdown(!corporatesDropdown)} style={{ display: "flex", alignItems: "center" }}>For Corpotates <img src={arrowUpSvg} style={{ marginLeft: 6 }} /></font>
                    {corporatesDropdown && <div className='dropdown-corporates' style={{ opacity: corporatesDropdown ? 1 : 0, pointerEvents: corporatesDropdown ? "all" : "none" }}>
                        {/* <label>Pulse check-in</label>
                        <label>Predict burnout</label>
                        <label>Overall wellness</label>
                        <label>Employee engagement</label> */}
                        <label onClick={() => {
                            window.location.href = "/pulse-check-in"
                        }}>Pulse check-in</label>
                        <label onClick={() => {
                            window.location.href = "/predict-burnout"
                        }}>Predict burnout</label>
                        <label onClick={() => {
                            window.location.href = "/overall-wellness"
                        }}>Overall wellness</label>
                        <label onClick={() => {
                            window.location.href = "/employee-engagement"
                        }}>Employee engagement</label>
                    </div>}
                </label>
                <label>Blog</label>
                <label>Login</label>
            </div>
        </div>
    )
}

export default Navbar