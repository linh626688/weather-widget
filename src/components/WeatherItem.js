import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import IconWeather from "./IconWeather";
import Temperature from "./Temperature";
import {SIZE_IMAGE, TIME_FORMAT} from "../constants/constants";

function WeatherItem({idx, isSelected, data, onChangeSelect}) {
  return (
    <div
      className={`${isSelected ? "selected-box" : ''} flex-fill border pointer`}
      onClick={() => onChangeSelect(idx)}
    >
      <div className="text-center p-2">
        {moment(data.dt * 1000).format(TIME_FORMAT.WEEK_DAY)}
        <IconWeather data={data.weather} size={SIZE_IMAGE.NORMAL}/>
        <Temperature value={data.temp && data.temp.max} size={20}/>
        <Temperature value={data.temp && data.temp.min} size={12}/>

      </div>
    </div>
  );
}
WeatherItem.propTypes = {
  idx: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onChangeSelect: PropTypes.func.isRequired,
};


export default WeatherItem;