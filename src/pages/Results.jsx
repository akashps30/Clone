import React from 'react';

const Results = () => {
  return (
    <div className="container my-4">
      <h1>Results</h1>
      <div className="list-group">
        {/* Add your result links here */}
        <a href="#" className="list-group-item list-group-item-action">Result of Examination 2024</a>
        <a href="#" className="list-group-item list-group-item-action">Result of Examination 2023</a>
        <a href="#" className="list-group-item list-group-item-action">Result of Examination 2022</a>
        {/* More results can be added */}
      </div>
    </div>
  );
};

export default Results;
