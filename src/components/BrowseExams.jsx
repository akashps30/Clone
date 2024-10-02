import React, { useState } from 'react';
import './BrowseExams.css';

const BrowseExams = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const exams = [
    {
      title: 'Selection Posts Examination',
      description: 'The SSC Selection Posts Examination assesses candidates for Group \'B\' and \'C\' positions in government departments...',
      link: '/selection-posts-exam'
    },
    {
      title: 'Junior Engineer (Civil, Mechanical & Electrical) Examination',
      description: 'This competitive exam is held to recruit junior engineers in various government departments and organizations...',
      link: '/junior-engineer-exam'
    },
    {
      title: 'Combined Graduate Level Examination',
      description: 'The Combined Graduate Level (CGL) examination conducted by the Staff Selection Commission (SSC) in India...',
      link: '/cgl-exam'
    },
    {
      title: 'Combined Higher Secondary Level (10+2) Examination',
      description: 'This is a competitive examination in India that is conducted to recruit candidates for various clerical and lower-division posts...',
      link: '/chsl-exam'
    },
    {
      title: 'Stenographer Grade \'C\' and \'D\' Examination',
      description: 'The Stenographer Grade \'C\' and \'D\' exams are competitive exams held to recruit stenographers for various government departments...',
      link: '/stenographer-exam'
    },
    {
      title: 'Constable (GD) in CAPFs, NIA, SSF and Rifleman (GD) in Assam Rifles Examination',
      description: 'The Constable GD (General Duty) exam is conducted by various Indian paramilitary and police forces, including the CAPFs...',
      link: '/gd-exam'
    }
  ];

  // Pagination dots logic
  const handleCardChange = (index) => {
    setCurrentCard(index);
  };

  return (
    <div className="browse-exams-section">
      <div className="browse-exams-content">
        <div className="exams-left">
          <h2>Browse by Examinations</h2>
          <p>Explore exam-related details and relevant resources</p>
        </div>
        <div className="exams-right">
          <div className="exams-cards">
            {exams.slice(currentCard, currentCard + 3).map((exam, index) => (
              <div key={index} className="exam-card">
                <h3>{exam.title}</h3>
                <p>{exam.description}</p>
                <a href={exam.link}>Learn More &rarr;</a>
              </div>
            ))}
          </div>
          <div className="pagination-dots">
            {Array.from({ length: Math.ceil(exams.length / 3) }).map((_, index) => (
              <span
                key={index}
                className={`dot ${currentCard === index ? 'active' : ''}`}
                onClick={() => handleCardChange(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseExams;
