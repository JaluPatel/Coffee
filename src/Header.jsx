import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header= () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo"> ☕ My Coffee</div>
            <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/menu"}>Menu</Link></li>
                <li><Link to={"/testimonials"}>Testimonials</Link></li>
                <li><Link to={"/gallery1"}>Gallery</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/login"}>login</Link></li>

            </ul>
        </nav>
    );
};

export default Header;
