import React from "react";
import { Navbar } from "../components";

interface Props { }

interface State { }

class ShoppingList extends React.Component<Props, State> {
	render() {
		return (
			<>
				<Navbar page="shopping-list" />
			</>
		)
	}
}

export default ShoppingList;