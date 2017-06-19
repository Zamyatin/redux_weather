import axios from 'axios';

const API_KEY = '2cac6ca800ba065922fa05d07f4f065f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},'us'`;
  const request = axios.get(url) //this will return a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
