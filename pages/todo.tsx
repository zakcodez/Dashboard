import React from "react";
import { Navbar } from "../components";

interface Props { }

interface State { }

class Todo extends React.Component<Props, State> {
	render() {
		return (
			<>
				<Navbar page="todo" />
			</>
		)
	}
}

export default Todo;