import React from 'react';
import moment from "moment";
import {isEmpty, get} from "lodash";
import IconWeather from "./IconWeather";
import Temperature from "./Temperature";
import {AIR_POLLUTION, SIZE_IMAGE, UNIT, UNIT_SPEED} from "../constants/constants";
import {convertWindDegreeToText} from "../utils/convertUtils";

WeatherDate.propTypes = {};

function WeatherDate({location, data, unit, onChangeUnit, airPollution}) {
  const renderOverallDescription = weather => {
    if (!isEmpty(weather)) {
      return weather.map((el, idx) => <li key={idx}>{el.main}</li>)
    }
  }

  return (
    <div>
      <h3>
        {location.name} - {location.country}
      </h3>
      <div className="d-flex flex-row">
        <div className="p2">
          {moment(data.dt * 1000).format('dddd hhA')}
        </div>
        <div className="p2">
          <ul>
            {renderOverallDescription(data.weather)}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row">
          <IconWeather data={data.weather} size={SIZE_IMAGE.LARGE}/>
          <div>
            <Temperature value={data.temp} size={65}/>
          </div>
          <div className="d-flex flex-row unit p-3">
            <div className={`${unit === UNIT.METRIC ? 'selected-unit' : ''} pointer`}
                 onClick={() => onChangeUnit(UNIT.METRIC)}>C
            </div>
            <div className="pr-1 pl-1">/</div>
            <div className={`${unit === UNIT.IMPERIAL ? 'selected-unit' : ''} pointer`}
                 onClick={() => onChangeUnit(UNIT.IMPERIAL)}>F
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <span>Humidity</span>: {data.humidity} %
          </div>
          <div>
            <span>Wind</span>:
            {data.wind_speed} {unit === UNIT.METRIC ? UNIT_SPEED.KPH : UNIT_SPEED.MPH}
            &nbsp; {convertWindDegreeToText(data.wind_deg)}
          </div>
          {!isEmpty(airPollution) &&
          <div>
            <span>Air Quality</span>: {AIR_POLLUTION[get(airPollution, 'list[0].main.aqi', 0)]}
          </div>
          }
        </div>

      </div>
    </div>
  );
}

export default WeatherDate;