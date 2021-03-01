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
Temperature.propTypes = {
  value: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};
Temperature.defaultProps = {
  value: 0,
  size: 10,
};


export default Temperature;