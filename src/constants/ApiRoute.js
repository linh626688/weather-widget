export const API_ROOT = 'http://api.openweathermap.org';
export const API_KEY = '1c5da32bd6a0d1c4c017b21b49833c7f';
export const API_ROUTE = {
  COORDINATES: `${API_ROOT}/geo/1.0/direct?q=@q&appid=${API_KEY}`, //https://openweathermap.org/api/geocoding-api
  HISTORICAL_DATA: `${API_ROOT}/data/2.5/onecall?lat=@lat&lon=@lon&units=@units&appid=${API_KEY}`, //https://openweathermap.org/api/one-call-api
  ICONS: ` http://openweathermap.org/img/wn`, //https://openweathermap.org/weather-conditions
  AIR_POLLUTION: `${API_ROOT}/data/2.5/air_pollution?lat=@lat&lon=@lon&appid=${API_KEY}`, //https://openweathermap.org/api/air-pollution
};
