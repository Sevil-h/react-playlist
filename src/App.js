import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
	const [token, setToken] = useState("");

	useEffect(() => {
		const token = window.localStorage.getItem("token");
		const hash = window.location.hash;
		window.localStorage.hash = "";
		if (!token && hash) {
			const _token = hash.split("&")[0].split("=")[1];
			window.localStorage.setItem("token", token);
			setToken(_token);
		} else {
			setToken(token);
		}
	});

	return (
		<Fragment>
			<Routes>
				{!token ? (
					<Route path="/" element={<Login />} />
				) : (
					<Route path="/*" element={<Dashboard />} />
				)}
			</Routes>
		</Fragment>
	);
}

export default App;
