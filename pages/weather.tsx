import React from "react";
import { Navbar } from "../components";

interface Props { }

interface State { }

class Weather extends React.Component<Props, State> {
	render() {
		return (
			<>
				<Navbar page="weather" />
			</>
		)
	}
}

export default Weather;