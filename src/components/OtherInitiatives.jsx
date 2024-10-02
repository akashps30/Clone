import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OtherInitiatives.css';  // Custom CSS

const OtherInitiatives = () => {
  const initiatives = [
    { 
      name: 'india.gov.in', 
      imgSrc: '/src/assets/di.svg', 
      alt: 'india.gov.in', 
      link: 'https://www.digitalindia.gov.in/' 
    },
    { 
      name: 'Make In India', 
      imgSrc: '/src/assets/mii.jpg', 
      alt: 'Make In India', 
      link: 'https://www.makeinindia.com/' 
    },
    { 
      name: 'Incredible India', 
      imgSrc: '/src/assets/Incredible_India.png', 
      alt: 'Incredible India', 
      link: 'https://www.incredibleindia.org/' 
    },
    { 
      name: 'data.gov.in', 
      imgSrc: '/src/assets/datagov.svg', 
      alt: 'data.gov.in', 
      link: 'https://data.gov.in/' 
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="other-initiatives-container">
      <h2>Other Initiatives</h2>
      <Slider {...settings}>
        {initiatives.map((initiative, index) => (
          <div key={index} className="initiative-card">
            <a href={initiative.link} target="_blank" rel="noopener noreferrer">
              <img src={initiative.imgSrc} alt={initiative.alt} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OtherInitiatives;
