// src/SimpleTestimonials.js

import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "This service is fantastic! Highly recommend.",
    image: "Assets/image/user-1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A wonderful experience from start to finish.",
    image: "Assets/image/user-2.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    text: "I am extremely satisfied with the quality.",
    image: "Assets/image/user-3.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    text: "An excellent service that exceeded my expectations.",
    image: "Assets/image/user-4.jpg",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    text: "I would definitely use this service again!",
    image: "Assets/image/user-5.jpg",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    text: "I would definitely use this service again!",
    image: "Assets/image/user-1.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonialsData.length / 3));
    }, 3000); // Change testimonials every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const displayedTestimonials = () => {
    const start = currentIndex * 3;
    return testimonialsData.slice(start, start + 3);
  };

  return (
    <div className="simple-testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {displayedTestimonials().map((testimonial) => (
          <div className="testimonial" key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={() => setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonialsData.length / 3)) % Math.ceil(testimonialsData.length / 3))}>Previous</button>
        <button onClick={() => setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonialsData.length / 3))}>Next</button>
      </div>
    </div>
  );
};


export default Testimonials;
