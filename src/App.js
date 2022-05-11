import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout/Layout";
import Playlist from "./components/Card/Playlist";
import Card from "./components/UI/Card/Card";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayerContext } from "./context/DataLayer";
import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState("");
	const [{ user }, dispatch] = useContext(DataLayerContext);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => console.log(user));
			dispatch({
				type: "SET_USER",
				user: user,
			});
		}
		console.log(user);
	}, []);

	return (
		<Layout>
			{!token ? (
				<Login />
			) : (
				<Card>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/playlist" element={<Playlist />} />
					</Routes>
				</Card>
			)}
		</Layout>
	);
}

export default App;
