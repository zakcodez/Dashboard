import { Navbar, Forecast } from "../components";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { WeatherData, WeatherError } from "../types";
import { useEffect, useState } from "react"


function Weather() {
	const [data, setData] = useState<WeatherData | WeatherError>(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords;
			fetch(`/api/weather?latitude=${latitude}&longitude=${longitude}`)
				.then((res) => res.json())
				.then((data: WeatherData | WeatherError) => {
					setLoading(false);
					setData(data);
				}).catch(() => {
					setData({ message: "Cannot get weather data" });
				});
		}, () => {
			setData({ message: "Unable to get GPS location" });
		});
	}, [])

	return (
		<>
			<Navbar page="weather" />
			<div className="container-fluid">
				{isLoading && <p>Loading</p>}
				{(data && "coord" in data) && <Forecast data={data} />}
				{(data && "message" in data) && data.message}
			</div>
		</>
	)
}

export default Weather;