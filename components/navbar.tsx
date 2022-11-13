import React from "react";

interface Props { }

interface State { }

class Navbar extends React.Component<Props, State> {
	state: State = {}

	render() {
		return (
			<>
				<nav className="navbar navbar-expand-lg bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Dashboard</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link active" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/todo">Todo</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/shopping-list">Shopping list</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/chat">Chat</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar