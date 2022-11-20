import React from "react";

interface Props { }

interface State { }

class Login extends React.Component<Props, State> {
	render() {
		return (
			<>
				<main className="login-main">
					<div className="text-center form-signin w-100 m-auto">
						<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

						<div className="form-floating">
							<input type="text" className="form-control" id="loginUsername" placeholder="username" />
							<label htmlFor="loginUsername">Username</label>
						</div>
						<div className="form-floating">
							<input type="password" className="form-control" id="loginPassword" placeholder="Password" />
							<label htmlFor="loginPassword">Password</label>
						</div>
						<button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.login}>Sign in</button>
					</div>
				</main>
			</>
		)
	}

	login() {
		const { value: username }: HTMLInputElement = document.querySelector("#loginUsername");
		const { value: password }: HTMLInputElement = document.querySelector("#loginPassword");
		fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({ username, password })
		});
	}
}

export default Login;