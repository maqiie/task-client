import React from 'react';
import './Loader.css'; // Make sure to create this CSS file

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  );
};

export default Loader;
