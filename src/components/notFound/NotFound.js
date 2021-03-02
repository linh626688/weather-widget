import React from 'react';
import NOT_FOUND from '../../assets/images/not_found.png';

function NotFound() {
  return (
    <div className="text-center">
      <img src={NOT_FOUND} alt="NOT_FOUND" />
      <p className="not-found-text">
        We could not find weather information for the location above
      </p>
    </div>
  );
}

export default NotFound;
