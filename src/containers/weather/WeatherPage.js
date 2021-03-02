/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/searchBox/SearchBox';
import { getRequest } from '../../utils/requestUtils';
import { API_ROUTE } from '../../constants/ApiRoute';
import {
  defaultLocation,
  defaultWeatherLocation,
  UNIT,
} from '../../constants/constants';
import { isEmpty } from 'lodash';
import NotFound from '../../components/notFound/NotFound';
import WeatherDate from '../../components/weatherDate/WeatherDate';
import Loading from '../../components/loading/Loading';
import WeatherWeek from '../../components/weatherWeek/WeatherWeek';
import useDebounce from '../../utils/useDebounce';

function WeatherPage() {
  const [searchText, setSearchText] = useState('Hanoi');
  const [unit, setUnit] = useState(UNIT.METRIC);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [weatherLocation, setWeatherLocation] = useState(
    defaultWeatherLocation
  );
  const [airPollution, settAirPollution] = useState({});
  const [selectedDate, setSelectedDate] = useState({});
  const [currentDate, setCurrentDate] = useState({});
  const [selectedIdx, setSelectedIdx] = useState(0);
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchLocationByText(searchText);
      setSelectedIdx(0);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!isEmpty(selectedLocation.name)) {
      getHistoricalData(selectedLocation, unit, 0);
      getAirPollutionData(selectedLocation);
    }
  }, [selectedLocation.name]);

  const searchLocationByText = (searchText) => {
    const url = API_ROUTE.COORDINATES.replace('@q', searchText);
    setLoading(true);
    getRequest(url)
      .then((res) => {
        if (!isEmpty(res.data)) {
          setSelectedLocation(res.data[0]);
        } else {
          setSelectedLocation({ name: '' });
        }
        setLoading(false);
      })
      .catch((err) => {
        setSelectedLocation({ name: '' });
        console.log(err);
      });
  };
  const getHistoricalData = (selectedLocation, unit, idx) => {
    const url = API_ROUTE.HISTORICAL_DATA.replace('@units', unit)
      .replace('@lat', selectedLocation.lat)
      .replace('@lon', selectedLocation.lon);
    setLoading(true);
    getRequest(url)
      .then((res) => {
        if (!isEmpty(res.data)) {
          setWeatherLocation(res.data);
          setCurrentDate(res.data.current);
          if (idx !== 0 && !isEmpty(res.data.daily) && res.data.daily[idx]) {
            setSelectedDate(res.data.daily[idx]);
          } else {
            setSelectedDate(res.data.current);
          }
        } else {
          setWeatherLocation({});
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getAirPollutionData = (selectedLocation) => {
    setLoading(true);
    const url = API_ROUTE.AIR_POLLUTION.replace(
      '@lat',
      selectedLocation.lat
    ).replace('@lon', selectedLocation.lon);
    getRequest(url)
      .then((res) => {
        if (!isEmpty(res.data)) {
          settAirPollution(res.data);
        } else {
          settAirPollution({});
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleChangeUnit = (selectedUnit) => {
    setUnit(selectedUnit);
    getHistoricalData(selectedLocation, selectedUnit, selectedIdx);
  };
  const handleChangeDateSelected = (idx) => {
    setSelectedIdx(idx);
    if (idx === 0) {
      setSelectedDate(currentDate);
    } else {
      if (!isEmpty(weatherLocation.daily)) {
        setSelectedDate(weatherLocation.daily[idx]);
      }
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <SearchBox value={searchText} onChange={setSearchText} />
      <div className="weather-box mt-2 mb-5 bg-body rounded">
        {isEmpty(selectedLocation.name) || isEmpty(weatherLocation) ? (
          <NotFound />
        ) : (
          <div>
            <WeatherDate
              location={selectedLocation}
              data={selectedDate}
              unit={unit}
              airPollution={airPollution}
              onChangeUnit={handleChangeUnit}
            />
            <WeatherWeek
              selectedIdx={selectedIdx}
              dataInWeek={weatherLocation.daily}
              onChangeSelect={handleChangeDateSelected}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherPage;
