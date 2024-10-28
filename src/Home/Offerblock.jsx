import React from 'react';

const Offerblock = () => {
  return (
    <div className="offer-container">
      <div className="offer-block">
        <img
          src="Assets/image/hot-dog1.jpg"
          alt="Special Offer 1"
          className="offer-image"
        />
        <h3 className="offer-title">Special Offer 1</h3>
        <p className="offer-description">Get 20% off on your first order!</p>
      </div>

      <div className="offer-block">
        <img
          src="Assets/image/Burger_Meal.png"
          alt="Special Offer 2"
          className="offer-image"
        />
        <h3 className="offer-title">Special Offer 2</h3>
        <p className="offer-description">Free shipping on orders over $50.</p>
      </div>

      <div className="offer-block">
        <img
          src="Assets/image/pizza1.jpg"
          alt="Special Offer 3"
          className="offer-image"
        />
        <h3 className="offer-title">Special Offer 3</h3>
        <p className="offer-description">Buy one, get one free!</p>
      </div>

      

      </div>
      
  );
};

export default Offerblock;
