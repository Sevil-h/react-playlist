import React, { useEffect, useState } from "react";
import apiClient, { setClientToken } from "../../hooks/useAuth";
import classes from "./Playlist.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineFastForward, AiFillFastBackward } from "react-icons/ai";
import Library from "../../library/Library";
import axios from "axios";

const Playlist = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [token, setToken] = useState("");

	useEffect(() => {
		if (localStorage.getItem("token")) {
			setToken(localStorage.getItem("token"));
		}
		axios
			.get("https://api.spotify.com/v1/me/playlists", {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then((response) => {
				const data = response;
				setData(response.data);
				console.log(response.data.items);
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<div className={classes.playlist}>
			<ul className={classes.list}>
				<li className={classes.listItem}>
					<AiFillFastBackward className={classes.icon} />
					<BsFillPlayFill className={classes.icon} />
					<BsPauseFill className={classes.icon} />
					<AiOutlineFastForward className={classes.icon} />
					song name
				</li>
			</ul>
		</div>
	);
};

export default Playlist;
