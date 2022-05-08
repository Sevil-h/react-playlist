import React from "react";

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "http://localhost:3000";
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
const scopes = [
	"user-library-read",
	"playlist-read-private",
	"user-modify-playback-state",
	"user-read-playback-state",
	"user-read-currently-playing",
	"user-read-recently-played",
	"streaming",
	"user-library-read",
];
const authEndpoint = "https://accounts.spotify.com/authorize?";
const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

console.log(loginEndpoint);
const Login = () => {
	return (
		<div
			className="container d-flex justify-content-center align-items-center"
			style={{ minHeight: "100%" }}
		>
			<a href={loginEndpoint} className="button">
				Login with Spotify
			</a>
		</div>
	);
};

export default Login;
