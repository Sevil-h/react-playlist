import React, { useState, useEffect } from "react";
import axios from "axios";

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/playlists";

const useFetch = () => {
	const [token, setToken] = useState("");
	const [data, setData] = useState({});

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setToken(localStorage.getItem("token"));
		}
		axios
			.get(PLAYLIST_ENDPOINT, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	console.log(data);

	return <div></div>;
};

export default useFetch;
