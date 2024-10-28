
import React from 'react';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <div className="image-wrapper">
                <img src="Assets/image/about-image.jpg" alt="Our Team" className="about-image" />
            </div>
            <div className="about-content">
                <p className="about-description">Welcome to our website! We are dedicated to providing the best service possible.</p>
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-description">To deliver high-quality products and exceptional customer service.</p>
                <h2 className="about-subtitle">Our Team</h2>
                <p className="about-description">We have a team of experienced professionals who are passionate about what they do.</p>
                <a href="/" className="cta-button">Go to Home</a>
            </div>
        </div>
    );
};

export default About;
