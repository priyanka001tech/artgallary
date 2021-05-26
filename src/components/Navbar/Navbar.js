import React from 'react';
import "./Navbar.scss";
import logo from "../OIP.jpg";
export default function Navbar() {
    return <nav className="navbar">
        <img src={logo} height="100px" width="120px" alt="city tour logo"/>
        <ul className="nav-links">
            <li>
                <a href="#" className="nav-link">
                    Home
                </a>
            </li>
            <li>
                <a href="#" className="nav-link">
                    About
                </a>
            </li>
            <li>
                <a href="#" className="nav-link active">
                    Tours
                </a>
            </li>
        </ul>
    </nav>
}