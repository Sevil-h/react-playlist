import React, { useEffect, useState } from "react";
import apiClient from "../../hooks/useAuth";
import classes from "./Playlist.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineFastForward, AiFillFastBackward } from "react-icons/ai";
import Library from "../../library/Library";

const Playlist = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [playlists, setPlaylists] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		apiClient
			.get(
				"https://api.spotify.com/v1/playlists/37i9dQZF1DXdPIbPNr916x/tracks?offset=0&limit=100&locale=tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7"
			)
			.then((res) => {
				console.log(res.data.items);
				setPlaylists(res.data.items);
			});
	}, []);

	console.log(playlists[0].track.artists[0].name);
	return (
		<div className={classes.playlist}>
			{isLoading && <p>isLoading...</p>}
			{!isLoading && (
				<ul className={classes.list}>
					{playlists.map((playlist) => (
						<li className={classes.listItem}>
							<AiFillFastBackward className={classes.icon} />
							<BsFillPlayFill className={classes.icon} />
							<BsPauseFill className={classes.icon} />
							<AiOutlineFastForward className={classes.icon} />
							song name
						</li>
					))}
					<li className={classes.listItem}>
						<AiFillFastBackward className={classes.icon} />
						<BsFillPlayFill className={classes.icon} />
						<BsPauseFill className={classes.icon} />
						<AiOutlineFastForward className={classes.icon} />
						song name
					</li>
				</ul>
			)}
		</div>
	);
};

export default Playlist;
