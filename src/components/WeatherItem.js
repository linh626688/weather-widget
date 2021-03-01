import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import IconWeather from "./IconWeather";
import Temperature from "./Temperature";
import {SIZE_IMAGE} from "../constants/constants";

WeatherItem.propTypes = {};

function WeatherItem({idx, data, onChangeSelect}) {
  return (
    <div className="flex-fill border pointer" onClick={() => onChangeSelect(idx)}>
      <div className="text-center p-2">
        {moment(data.dt * 1000).format('dddd')}
        <IconWeather data={data.weather} size={SIZE_IMAGE.NORMAL}/>
        <Temperature value={data.temp && data.temp.max} size={20}/>
        <Temperature value={data.temp && data.temp.min} size={12}/>

      </div>
    </div>
  );
}

export default WeatherItem;