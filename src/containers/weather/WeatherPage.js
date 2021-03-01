import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SearchBox from "../../components/SearchBox";
import {getRequest} from "../../utils/requestUtils";
import {API_ROUTE} from "../../constants/ApiRoute";
import {defaultLocation, UNIT} from "../../constants/constants";
import {isEmpty} from "lodash";
import NotFound from "../../components/NotFound";
import WeatherDate from "../../components/WeatherDate";
import Loading from "../../components/Loading";
import WeatherWeek from "../../components/WeatherWeek";

WeatherPage.propTypes = {};


function WeatherPage({}) {

  const [searchText, setSearchText] = useState('Hanoi');
  const [unit, setUnit] = useState(UNIT.METRIC);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
  const [weatherLocation, setWeatherLocation] = useState('')
  const [airPollution, settAirPollution] = useState({})
  const [selectedDate, setSelectedDate] = useState({})

  useEffect(() => {
    searchLocationByText(searchText);
  }, [searchText]);


  useEffect(() => {
    if (!isEmpty(selectedLocation)) {
      getHistoricalData(selectedLocation, unit);
      getAirPollutionData(selectedLocation)
    }
  }, [selectedLocation, unit])


  const searchLocationByText = searchText => {
    const url = API_ROUTE.COORDINATES.replace("@q", searchText);
    getRequest(url).then(res => {
      if (!isEmpty(res.data)) {
        setSelectedLocation(res.data[0])
      } else {
        setSelectedLocation(null)
      }
      setLoading(false);
    }).catch(err => {
      console.log(err)
    })
  }

  const getHistoricalData = (selectedLocation, unit) => {
    const url = API_ROUTE.HISTORICAL_DATA
      .replace("@units", unit)
      .replace("@lat", selectedLocation.lat)
      .replace("@lon", selectedLocation.lon);
    setLoading(true);
    getRequest(url).then(res => {
      if (!isEmpty(res.data)) {
        setWeatherLocation(res.data)
        setSelectedDate(res.data.current)
      } else {
        setWeatherLocation(null)
      }
      setLoading(false);

    }).catch(err => {
      setLoading(false);
      console.log(err)
    })
  }

  const getAirPollutionData = selectedLocation => {
    setLoading(true);
    const url = API_ROUTE.AIR_POLLUTION
      .replace("@lat", selectedLocation.lat)
      .replace("@lon", selectedLocation.lon);
    getRequest(url).then(res => {
      if (!isEmpty(res.data)) {
        settAirPollution(res.data)
      } else {
        settAirPollution({})
      }
      setLoading(false);

    }).catch(err => {
      setLoading(false);
      console.log(err)
    })

  }

  const handleChangeUnit = selectedUnit => {
    setUnit(selectedUnit);
  }
  const handleChangeDateSelected = idx => {
    if (!isEmpty(weatherLocation.daily)) {
      setSelectedDate(weatherLocation.daily[idx])
    }
  }


  return (
    <div>
      {loading && <Loading/>}
      <SearchBox value={searchText} onChange={setSearchText}/>
      <div className="shadow-sm p-3 mt-2 mb-5 bg-body rounded">
        {isEmpty(selectedLocation) || isEmpty(weatherLocation) ? <NotFound/> :
          <div>
            <WeatherDate
              location={selectedLocation}
              data={selectedDate}
              unit={unit}
              airPollution={airPollution}
              onChangeUnit={handleChangeUnit}
            />
            <WeatherWeek dataInWeek={weatherLocation.daily} onChangeSelect={handleChangeDateSelected}/>
          </div>
        }
      </div>
    </div>
  );
}

export default WeatherPage;