import axios from "axios";
const API_KEY = "dc9d8567ed757ea6537529791459420a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},iran`;
	const request = axios.get(url);
	// console.log(`Request is : ${request}`);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
