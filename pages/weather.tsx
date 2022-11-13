import React from "react";
import { Navbar, Forecast } from "../components";
import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { WeatherData } from "../types";

interface Props {
	data: WeatherData;
}

interface State { }

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { data } = await axios<WeatherData>("/api/weather");
	return { props: { data } }
}

class Weather extends React.Component<Props, State> {
	render() {
		return (
			<>
				<Navbar page="weather" />
				<Forecast data={this.props.data} />
			</>
		)
	}
}

export default Weather;