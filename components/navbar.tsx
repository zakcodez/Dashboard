import React, { useState } from "react";
import { Page, UserCookie } from "../types";

interface Props {
	page: Page;
	user: UserCookie | null;
}

function Navbar(props: Props) {
	const [user, setUser] = useState(props.user);
	function logoutOrSignIn(event: React.MouseEvent) {
		if (user) {
			document.cookie = "authtoken=";
			setUser(null);
			location.assign("/");
		} else location.assign("/login");
	}

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Dashboard</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className={props.page === "home" ? "nav-link active" : "nav-link"} href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className={props.page === "todo" ? "nav-link active" : "nav-link"} href="/todo">Todo</a>
							</li>
							<li className="nav-item">
								<a className={props.page === "shopping-list" ? "nav-link active" : "nav-link"} href="/shopping-list">Shopping list</a>
							</li>
							<li className="nav-item">
								<a className={props.page === "weather" ? "nav-link active" : "nav-link"} href="/weather">Weather</a>
							</li>
							<li className="nav-item">
								<a className={props.page === "chat" ? "nav-link active" : "nav-link"} href="/chat">Chat</a>
							</li>
						</ul>
						<div className="d-flex">
							{user && <span className="me-2">{user.username}</span>}
							<button
								className="btn btn-outline-success"
								onClick={logoutOrSignIn}
							>{user ? "Logout" : "Sign in"}</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar;