export const defaultLocation = {
  country: "VN",
  lat: 21.0245,
  local_names: {ar: "هانوي", ascii: "Hanoi", az: "Hanoy", bg: "Ханой", ca: "Hanoi",},
  lon: 105.8412,
  name: "Ha Noi",
}

export const defaultWeatherLocation = {
  lat: 21.0245,
  lon: 105.8412,
  timezone: 'Asia/Bangkok',
  timezone_offset: 25200,
  current: {
    dt: 1614619305,
    sunrise: 1614640596,
    sunset: 1614682883,
    temp: 21,
    feels_like: 19.11,
    pressure: 1018,
    humidity: 83,
    dew_point: 18,
    uvi: 0,
    clouds: 75,
    visibility: 9000,
    wind_speed: 6.69,
    wind_deg: 50,
    weather: [
      { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n' },
    ],
  },
  minutely: [],
  hourly: [],
  daily: [],
}

export const UNIT = {
  METRIC: 'metric',
  IMPERIAL: 'imperial',
}

export const UNIT_SPEED = {
  MPH: 'MPH',
  KPH: 'KPH',
}
// Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
export const AIR_POLLUTION = {
  1: 'Good',
  2: 'Fair',
  3: 'Moderate',
  4: 'Poor',
  5: 'Very Poor',
}
export const SIZE_IMAGE = {
  LARGE: '@2x',
  NORMAL: '',
}
export const TIME_FORMAT = {
  WEEK_DAY: 'dddd',
  WEEK_DAY_APM: 'dddd hhA',
}