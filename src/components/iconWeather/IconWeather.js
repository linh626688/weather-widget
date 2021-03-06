import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { API_ROUTE } from '../../constants/ApiRoute';
import { isEmpty } from 'lodash';

function IconWeather({ data, size }) {
  const [firstWeather, setFirstWeather] = useState({ icon: '10d' });
  useEffect(() => {
    if (!isEmpty(data)) {
      setFirstWeather(data[0]);
    }
  }, [data]);
  return (
    <div>
      <img
        src={`${API_ROUTE.ICONS}/${firstWeather.icon}${size}.png`}
        alt={firstWeather.icon}
      />
    </div>
  );
}
IconWeather.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string.isRequired,
};
IconWeather.defaultProps = {
  data: [],
  size: '',
};

export default IconWeather;
