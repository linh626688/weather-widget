import React from 'react';

function Loading() {
  return (
    <div id="overlay">
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="spinner" data-testid="spinner-element" />
      </div>
    </div>
  );
}

export default Loading;
