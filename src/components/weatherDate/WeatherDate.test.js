import React from 'react';
import { screen, render } from '@testing-library/react';
import WeatherDate from './WeatherDate';
import {
  defaultLocation,
  defaultWeatherLocation,
} from '../../constants/constants';

const location = { defaultLocation };
const data = { defaultWeatherLocation };
const unit = 'metric';
const airPollution = {};
const onChangeUnit = jest.fn();

test('render WeatherDate ', () => {
  render(
    <WeatherDate
      location={location}
      data={data}
      unit={unit}
      airPollution={airPollution}
      onChangeUnit={onChangeUnit}
    />
  );
  const element = screen.getByTestId('location');
  expect(element).toBeInTheDocument();
});
