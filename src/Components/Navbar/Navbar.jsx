import React from "react";
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Bizz</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonial</li>
                    </ul>
                </div>
                <button className="button n-button">Contact us</button>
            </div>
        </div>
    )
}

export default Navbar;