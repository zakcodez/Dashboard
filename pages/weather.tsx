import { Wrapper, Forecast } from "../components";
import { GetServerSidePropsContext } from "next";
import { WeatherData, WeatherError, UserCookie } from "../types";
import { useEffect, useState } from "react"
import jwt from "jsonwebtoken";

interface Props {
	user: UserCookie | null;
}

export function getServerSideProps(context: GetServerSidePropsContext) {
	const { authtoken } = context.req.cookies;
	const loggedIn = !!authtoken;
	const json = jwt.decode(authtoken);
	const user = !loggedIn
		? null
		: typeof json === "string"
			? JSON.parse(json)
			: json;
	return { props: { user } }
}

function Weather({ user }: Props) {
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
			<Wrapper page="weather" user={user}>
				{isLoading && <p>Loading</p>}
				{(data && "coord" in data) && <Forecast data={data} />}
				{(data && "message" in data) && data.message}
			</Wrapper>
		</>
	)
}

export default Weather;