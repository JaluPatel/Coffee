import React from 'react';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="title">Best Coffee</h1>
        <h2 className="subtitle">Make your day great with our special coffee!</h2>
        <p className="description">
        Welcome to our coffee paradise, where every bean tells <br></br> a story and every cup sparks joy.
        </p>
        <div className="button-container">
          <button className="cta-button contact-button">Contact Us</button>
          <button className="cta-button order-button">Order Now</button>
        </div>
      </div>

      <img src="Assets/image/coffee-img5.webp" alt="Hero" className="hero-image" />
    </div>
  );
};

export default Home;
