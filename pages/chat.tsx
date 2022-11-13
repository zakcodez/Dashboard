import React from "react";
import { Navbar } from "../components";

interface Props { }

interface State { }

class HomePage extends React.Component<Props, State> {
	render() {
		return (
			<>
				<Navbar page="chat" />
			</>
		)
	}
}

export default HomePage;