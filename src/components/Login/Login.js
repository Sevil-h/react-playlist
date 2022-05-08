import React from "react";

const clientId = "97ae56778f9c4caab0fc2382acbf8c75";
const redirectUri = "http://localhost:3000";
const clientSecret = "57d21fe0371e446da955d2327edc1eb7";

app.get("/login", function (req, res) {
	var state = generateRandomString(16);
	var scope = "user-read-private user-read-email";

	res.redirect(
		"https://accounts.spotify.com/authorize?" +
			querystring.stringify({
				response_type: "code",
				client_id: clientId,
				scope: scope,
				redirect_uri: redirectUri,
				state: state,
			})
	);
});

const Login = () => {
	return (
		<div
			className="container d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<button className="btn btn-primary">Login</button>
		</div>
	);
};

export default Login;
