import React, { useEffect, useState } from "react";
import apiClient from "../hooks/useAuth";

const Library = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [playlists, setPlaylists] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			const res = await apiClient.get(
				"https://api.spotify.com/v1/playlists/37i9dQZF1DXdPIbPNr916x/tracks"
			);
			const data = await res.data.items;
		};
		// apiClient
		// 	.get("https://api.spotify.com/v1/playlists/37i9dQZF1DXdPIbPNr916x/tracks")
		// 	.then((res) => {
		// 		setPlaylists(res.data.items);
		// 		console.log(res.data.items);
		// 	});
		const result = fetchData();
		console.log(result);
	}, []);
	return (
		<ul>
			{playlists?.map((playlist) => (
				<li key={playlist.name}>
					<a href="#">{playlist.name}</a>
				</li>
			))}
		</ul>
	);
};

export default Library;
