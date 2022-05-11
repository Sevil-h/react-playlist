import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { setClientToken } from "./hooks/useAuth";
import Layout from "./components/Layout/Layout";
import Playlist from "./components/Card/Playlist";
import Card from "./components/UI/Card/Card";

function App() {
	const [token, setToken] = useState("");

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const hash = window.location.hash;
		window.location.hash = "";
		if (!token && hash) {
			const _token = hash.split("&")[0].split("=")[1];
			window.localStorage.setItem("token", _token);
			setToken(_token);
			setClientToken(_token);
		} else {
			setToken(token);
			setClientToken(token);
		}
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
