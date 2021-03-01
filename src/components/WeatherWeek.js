import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from "./WeatherItem";
import {isEmpty} from "lodash";

WeatherWeek.propTypes = {};

function WeatherWeek({dataInWeek, onChangeSelect}) {
  return (
    <div className="d-flex flex-row">
      {!isEmpty(dataInWeek) && dataInWeek.map((el, idx) => (
          <WeatherItem key={idx} idx={idx} data={el} onChangeSelect={onChangeSelect}/>
        )
      )
      }
    </div>

  );
}

export default WeatherWeek;