import React from 'react';
import moment from "moment";

WeatherDate.propTypes = {};

function WeatherDate({location, data}) {
  return (
    <div>
      <h3>      {location.name} - {location.country}
      </h3>
      <div>
        {moment(data.current.dt).format('dddd hhA')}
      </div>
    </div>
  );
}

export default WeatherDate;