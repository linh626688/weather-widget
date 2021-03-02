import React from 'react';
import moment from 'moment';
import { isEmpty, get, isObject } from 'lodash';
import IconWeather from '../iconWeather/IconWeather';
import Temperature from '../temperature/Temperature';
import {
  AIR_POLLUTION,
  SIZE_IMAGE,
  TIME_FORMAT,
  UNIT,
  UNIT_SPEED,
} from '../../constants/constants';
import { convertWindDegreeToText } from '../../utils/convertUtils';
import PropTypes from 'prop-types';

function WeatherDate({ location, data, unit, onChangeUnit, airPollution }) {
  const renderOverallDescription = (weather) => {
    if (!isEmpty(weather)) {
      return weather.map((el, idx) => <li key={idx}>{el.main}</li>);
    }
  };

  return (
    <div>
      <h3 data-testid="location">
        {location.name}, {location.country}
      </h3>
      <div className="d-flex flex-row">
        <div className="p2">
          {moment(data.dt * 1000).format(
            !isObject(data.temp)
              ? TIME_FORMAT.WEEK_DAY_APM
              : TIME_FORMAT.WEEK_DAY
          )}
        </div>
        <div className="p2">
          <ul>{renderOverallDescription(data.weather)}</ul>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row">
          <IconWeather data={data.weather} size={SIZE_IMAGE.LARGE} />
          <div>
            <Temperature
              value={isObject(data.temp) ? get(data.temp, 'max', 0) : data.temp}
              size={65}
            />
          </div>
          <div className="d-flex flex-row unit p-3">
            <div
              className={`${
                unit === UNIT.METRIC ? 'selected-unit' : ''
              } pointer`}
              onClick={() => onChangeUnit(UNIT.METRIC)}
            >
              C
            </div>
            <div className="pr-1 pl-1">/</div>
            <div
              className={`${
                unit === UNIT.IMPERIAL ? 'selected-unit' : ''
              } pointer`}
              onClick={() => onChangeUnit(UNIT.IMPERIAL)}
            >
              F
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <span>Humidity</span>: {data.humidity} %
          </div>
          <div>
            <span>Wind</span>:&nbsp;
            {data.wind_speed}{' '}
            {unit === UNIT.METRIC ? UNIT_SPEED.KPH : UNIT_SPEED.MPH}
            &nbsp; {convertWindDegreeToText(data.wind_deg)}
          </div>
          {!isEmpty(airPollution) && !isObject(data.temp) && (
            <div>
              <span>Air Quality</span>:&nbsp;
              {AIR_POLLUTION[get(airPollution, 'list[0].main.aqi', 0)]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

WeatherDate.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
  unit: PropTypes.string.isRequired,
  onChangeUnit: PropTypes.func.isRequired,
  airPollution: PropTypes.object,
};

export default WeatherDate;
