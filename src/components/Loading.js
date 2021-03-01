import React from 'react';
import PropTypes from 'prop-types';

Loading.propTypes = {};

function Loading() {
  return (
    <div id="overlay">
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className="spinner"/>
      </div>
    </div>
  );
}

export default Loading;