import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  {
    src: 'image1.jpg', // Replace with your image paths
    alt: 'Yoga Day 1',
  },
  {
    src: 'image2.jpg', // Replace with your image paths
    alt: 'Yoga Day 2',
  },
  {
    src: 'image3.jpg', // Replace with your image paths
    alt: 'Gandhi Quote',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}s
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
