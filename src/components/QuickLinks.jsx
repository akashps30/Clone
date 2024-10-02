import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuickLinks.css';

const QuickLinks = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Quick Links</h2>
      <div className="row g-3">
        {/* Apply Button */}
        <div className="col-md-6">
          <a
            href="https://ssc.gov.in/home/apply"
            className="d-flex align-items-center p-3 bg-white rounded shadow-sm text-decoration-none quick-link"
          >
            <div className="bg-danger p-2 rounded-circle me-3">
              <i className="bi bi-pencil-square text-white"></i>
            </div>
            <span className="fs-5 text-dark">Apply</span>
          </a>
        </div>

        {/* Admit Card Button */}
        <div className="col-md-6">
          <a
            href="/admit-card"
            className="d-flex align-items-center p-3 bg-white rounded shadow-sm text-decoration-none quick-link"
          >
            <div className="bg-primary p-2 rounded-circle me-3">
              <i className="bi bi-card-text text-white"></i>
            </div>
            <span className="fs-5 text-dark">Admit Card</span>
          </a>
        </div>

        {/* Answer Key Button */}
        <div className="col-md-6">
          <a
            href="https://ssc.gov.in/home/answer-key"
            className="d-flex align-items-center p-3 bg-white rounded shadow-sm text-decoration-none quick-link"
          >
            <div className="bg-warning p-2 rounded-circle me-3">
              <i className="bi bi-key-fill text-white"></i>
            </div>
            <span className="fs-5 text-dark">Answer Key</span>
          </a>
        </div>

        {/* Result Button */}
        <div className="col-md-6">
          <a
            href="https://ssc.gov.in/home/candidate-result"
            className="d-flex align-items-center p-3 bg-white rounded shadow-sm text-decoration-none quick-link"
          >
            <div className="bg-success p-2 rounded-circle me-3">
              <i className="bi bi-graph-up-arrow text-white"></i>
            </div>
            <span className="fs-5 text-dark">Result</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
