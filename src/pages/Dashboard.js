import React, { useEffect } from "react";
import apiClient from "../hooks/useAuth";

const Dashboard = () => {
	useEffect(() => {
		// profile
		apiClient.get("https://api.spotify.com/v1/me").then((response) => {
			const data = response.data;
			console.log(response);
			const userName = data.display_name;
			const avatar = data.images[0].url;
		});
	}, []);
	return <div>Dashboard</div>;
};

export default Dashboard;
