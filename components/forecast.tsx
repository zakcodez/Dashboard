import React from "react";
import { WeatherData } from "../types";

interface Props {
	data: WeatherData;
}

function Forecast(props: Props) {
	const { data } = props;
	const currentTemp = Math.round(data.main.temp - 273.15);
	const feelsLike = Math.round(data.main.feels_like - 273.15);
	const maxTemp = Math.round(data.main.temp_max - 273.15);
	const minTemp = Math.round(data.main.temp_min - 273.15);
	const windSpeed = Math.round(data.wind.speed * 3.6);
	const windGust = Math.round(data.wind.gust * 3.6);
	const windDirection = getWindDirection(data.wind.deg);

	function getWindDirection(degrees: number) {
		const value = Math.floor((degrees / 22.5) + .5);
		const array = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
		return array[(value % 16)];
	}

	return (
		<>
			<h3>Forecast for today</h3>
			<h5>Currently {currentTemp}, feels like {feelsLike}</h5>
			<h5>Max: {maxTemp}, min: {minTemp}</h5>
			<p>Winds to {windDirection} at {windSpeed}km/h</p>
			<p>Wind gusts: {windGust}km/h</p>
			{data.weather.map(({ description }) =>
				<p>{description[0].toUpperCase()}{description.substring(1)}</p>
			)}
		</>
	)
}

export default Forecast;