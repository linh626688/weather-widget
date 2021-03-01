import React from 'react';
import NOT_FOUND from './../assets/images/not_found.png';

function NotFound() {
  return (
    <div className="text-center">
      <img className="w-25" src={NOT_FOUND} alt="" />
      <p>We could not find weather information for the location above</p>
    </div>
  );
}

export default NotFound;
