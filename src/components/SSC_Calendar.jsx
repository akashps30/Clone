import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SSC_Calendar.css';


const SSCCalendar = () => {
  return (
    <div className="container my-4">
      {/* SSC Calendar Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">SSC Calendar</h2>
        <span className="text-muted">Sep, 2024</span>
      </div>

      {/* Scrollable Calendar List */}
      <div className="border rounded p-3 shadow-sm calendar-list">
        {/* Calendar Item 1 */}
        <div className="d-flex mb-3 calendar-item">
          <div className="calendar-date text-center bg-danger text-white rounded-left p-2">
            <strong className="fs-4">5</strong>
            <br />
            <span className="fs-6">JAN</span>
          </div>
          <div className="ms-3">
            <strong>Grade 'C' Stenographer Limited Departmental Competitive Examination, 2023-2024</strong>
          </div>
        </div>

        {/* Calendar Item 2 */}
        <div className="d-flex mb-3 calendar-item">
          <div className="calendar-date text-center bg-danger text-white rounded-left p-2">
            <strong className="fs-4">12</strong>
            <br />
            <span className="fs-6">JAN</span>
          </div>
          <div className="ms-3">
            <strong>JSA/LDC Grade Limited Departmental Competitive Examination, 2023-2024</strong>
          </div>
        </div>

        {/* Calendar Item 3 */}
        <div className="d-flex mb-3 calendar-item">
          <div className="calendar-date text-center bg-danger text-white rounded-left p-2">
            <strong className="fs-4">19</strong>
            <br />
            <span className="fs-6">JAN</span>
          </div>
          <div className="ms-3">
            <strong>SSA/UDC Grade Limited Departmental Competitive Examination, 2023-2024</strong>
          </div>
        </div>

        {/* Calendar Item 4 */}
        <div className="d-flex mb-3 calendar-item">
          <div className="calendar-date text-center bg-danger text-white rounded-left p-2">
            <strong className="fs-4">1</strong>
            <br />
            <span className="fs-6">FEB</span>
          </div>
          <div className="ms-3">
            <strong>Selection Post Examination, Phase-XII, 2024</strong>
          </div>
        </div>

        {/* You can add more items here as needed */}
      </div>

      {/* Static View All Link */}
      <div className="text-center mt-3">
        <a href="/view-all" className="text-decoration-none text-danger fw-bold">View All</a>
      </div>
    </div>
  );
};

export default SSCCalendar;
