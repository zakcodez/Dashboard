import React from "react";
import { WeatherData, WeatherError } from "../types";

interface Props {
	data: WeatherData | WeatherError;
}

function Forecast(props: Props) {
	const { data } = props;
	return (
		<>
			{data && ("message" in data && data.message)}
			{data && ("weather" in data && JSON.stringify(data))}
		</>
	)
}

export default Forecast;