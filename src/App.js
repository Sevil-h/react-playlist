import React, { Fragment } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Fragment>
	);
}

export default App;
