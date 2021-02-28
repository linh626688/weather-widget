import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import SearchBox from "../../components/SearchBox";
import {getRequest} from "../../utils/requestUtils";
import {API_ROUTE} from "../../constants/ApiRoute";
import {defaultLocation} from "../../constants/constants";
import {isEmpty} from "lodash";
import NotFound from "../../components/NotFound";
import WeatherDate from "../../components/WeatherDate";

WeatherPage.propTypes = {};


function WeatherPage({}) {

  const [searchText, setSearchText] = useState('Hanoi');
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation)
  const [weatherLocation, setWeatherLocation] = useState('')
  const [selectedDate, setSelectedDate] = useState({})

  useEffect(() => {
    const url = API_ROUTE.COORDINATES.replace("@q", searchText);
    getRequest(url).then(res => {
      if (!isEmpty(res.data)) {
        setSelectedLocation(res.data[0])
      } else {
        setSelectedLocation(null)
      }
    }).catch(err => {
      console.log(err)
    })
  }, [searchText]);

  useEffect(() => {
    if (!isEmpty(selectedLocation)) {
      const url = API_ROUTE.HISTORICAL_DATA
        .replace("@lat", selectedLocation.lat)
        .replace("@lon", selectedLocation.lon);

      getRequest(url).then(res => {
        if (!isEmpty(res.data)) {
          setWeatherLocation(res.data)
          setSelectedDate(res.data.current)
        } else {
          setWeatherLocation(null)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }, [selectedLocation])

  console.log('selectedDate', selectedDate)
  return (
    <div>
      <SearchBox value={searchText} onChange={setSearchText}/>
      <div className="shadow-sm p-3 mt-2 mb-5 bg-body rounded">
        {isEmpty(selectedLocation) || isEmpty(weatherLocation) ? <NotFound/> :
          <WeatherDate location={selectedLocation} data={weatherLocation}/>}
      </div>

    </div>
  );
}

export default WeatherPage;