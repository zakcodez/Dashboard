import { useEffect, useState } from "react";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginError, setLoginError] = useState(false);
	const [invalidCredentials, setInvalidCredentials] = useState(false);

	useEffect(() => {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("authtoken="));
		const cookieValue = cookie ? cookie.split("=")[1] : null;
		if (cookieValue) location.assign("/");
	});

	async function login() {
		setInvalidCredentials(false);
		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ username, password })
			});

			if (response.status === 401) {
				setLoginError(true);
				setInvalidCredentials(true);
				return;
			}

			const { token } = await response.json();
			if (token) {
				document.cookie = `authtoken=${token}`;
				location.assign("/");
			}
		} catch (error) {
			setLoginError(true);
			console.log(error);
		}
	}

	return (
		<>
			<main className="login-main">
				<div className="text-center form-signin w-100 m-auto">
					<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

					<div className="form-floating">
						<input
							type="text"
							className="form-control"
							id="loginUsername"
							placeholder="username"
							value={username}
							onChange={(event) => setUsername(event.currentTarget.value)} />
						<label htmlFor="loginUsername">Username</label>
					</div>
					<div className="form-floating">
						<input
							type="password"
							className="form-control"
							id="loginPassword"
							placeholder="Password"
							value={password}
							onChange={(event) => setPassword(event.currentTarget.value)} />
						<label htmlFor="loginPassword">Password</label>
					</div>
					<button className="w-100 btn btn-lg btn-primary" type="button" onClick={login}>Sign in</button>
					{loginError &&
						<div className="alert alert-danger mt-5 mb-3">
							{invalidCredentials ? "Invalid credentials" : "Failed to sign in"}
						</div>}
				</div>
			</main>
		</>
	);
}

export default Login;