import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'Is Registration mandatory for applying to the examinations of the Commission?', answer: 'Yes, registration is mandatory to apply.' },
    { question: 'I did not receive registration number and password on the email.', answer: 'Please check your spam folder or try resending the email.' },
    { question: 'When is the notice/advertisement of an Examination issued?', answer: 'Notices are issued according to the examination calendar.' },
    { question: 'What are the posts for which the SSC conducts exams and what are the required qualifications?', answer: 'SSC conducts exams for various posts, qualifications vary.' },
    { question: 'When does the Commission upload its Annual Calendar of Examinations?', answer: 'The annual calendar is uploaded at the start of each year.' },
  ];

  const toggleFAQ = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="left-panel">
        <h2>FAQs</h2>
        <p>List of common inquiries and their brief answers to provide quick information and assist users.</p>
        <button className="view-all-button">View All</button>
      </div>
      <div className="right-panel">
        <h3>MOST POPULAR FAQS</h3>
        <div className="faq-questions">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className={`icon ${activeIndex === index ? 'minus' : 'plus'}`}></span>
              </div>
              {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
