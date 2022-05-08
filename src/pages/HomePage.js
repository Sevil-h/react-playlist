import React, { useState, useEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

const HomePage = () => {
	const [token, setToken] = useState("");

	useEffect(() => {
		const hash = window.location.hash;
		const _token = hash.split("&")[0].split("=")[1];
		window.localStorage.setItem("token", token);
		setToken(_token);
	});

	return !token ? <Login /> : <Dashboard />;
};

export default HomePage;
