import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import Card from "./components/UI/Card/Card";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayerContext } from "./context/DataLayer";
import { getTokenFromUrl } from "./spotify";
import Player from "./pages/Player";
import Library from "./pages/Library";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useContext(DataLayerContext);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
		}
	}, []);
	console.log(user);
	return (
		<Layout>
			{!token ? (
				<Login />
			) : (
				<Card>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/playlist" element={<Player spotify={spotify} />} />
						<Route path="/library" element={<Library />} />
					</Routes>
				</Card>
			)}
		</Layout>
	);
}

export default App;
