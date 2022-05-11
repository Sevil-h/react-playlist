import React, { useEffect, useState } from "react";
import apiClient from "../hooks/useAuth";
import Card from "../components/UI/Card/Card";
import PlayCard from "../components/Card/PlayCard";
import Library from "../library/Library";
import Playlist from "../components/Card/Playlist";

const Dashboard = () => {
	// const [image, setImage] = useState("");

	// useEffect(() => {
	// 	apiClient.get("https://api.spotify.com/v1/me/playlists").then((res) => {
	// 		const data = res.data;
	// 		console.log(data);
	// 		data.items.map((item) => console.log(item));
	// 	});
	// }, []);
	return (
		<Card>
			<Playlist />
			{/* <PlayCard /> */}
		</Card>
	);
};

export default Dashboard;
