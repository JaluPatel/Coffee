// src/App.js
import React, { useState, useEffect } from 'react';

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Automatically show the popup when the component mounts
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
     
<>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content animated-popup">
            <h2>Hello, Visitor!</h2>
            <p>We're glad you're here. Take a look around!</p>
            <button className="close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
</>
  );
}

export default Popup;