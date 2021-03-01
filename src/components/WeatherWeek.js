import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from "./WeatherItem";
import {isEmpty} from "lodash";


function WeatherWeek({dataInWeek, onChangeSelect, selectedIdx}) {
  return (
    <div className="d-flex flex-row">
      {!isEmpty(dataInWeek) && dataInWeek.map((el, idx) => (
          <WeatherItem
            key={idx}
            isSelected={selectedIdx === idx}
            idx={idx}
            data={el}
            onChangeSelect={onChangeSelect}
          />
        )
      )
      }
    </div>

  );
}
WeatherWeek.propTypes = {
  selectedIdx: PropTypes.number.isRequired,
  dataInWeek: PropTypes.array,
  onChangeSelect: PropTypes.func.isRequired,
};

export default WeatherWeek;