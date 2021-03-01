import React from 'react';
import PropTypes from 'prop-types';

Temperature.propTypes = {};

function Temperature({value, size}) {
  return (
    <section>
      <span id="current-temp" style={{fontSize: size}}>{value}</span>
    </section>
  );
}

export default Temperature;