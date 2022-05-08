import React, { useState } from "react";

const clientId = "97ae56778f9c4caab0fc2382acbf8c75";
const redirectUri = "http://localhost:3000";
const clientSecret = "57d21fe0371e446da955d2327edc1eb7";
const scopes = ["user-library-read", "playlist-read-private"];
const authEndpoint = "https://accounts.spotify.com/authorize?";
const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

const Login = () => {
	return (
		<div
			className="container d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}
		>
			<a href={loginEndpoint} className="btn btn-primary btn-lg">
				Login with Spotify
			</a>
		</div>
	);
};

export default Login;
