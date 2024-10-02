import React from 'react';

const Notices = () => {
  return (
    <div className="container my-4">
      <h1>Notices</h1>
      <div className="list-group">
        {/* Add your notices here */}
        <a href="#" className="list-group-item list-group-item-action">Notice 1</a>
        <a href="#" className="list-group-item list-group-item-action">Notice 2</a>
        <a href="#" className="list-group-item list-group-item-action">Notice 3</a>
        {/* More notices can be added */}
      </div>
    </div>
  );
};

export default Notices;
