import React, { useEffect, useState } from "react";
import apiClient from "../../hooks/useAuth";
import classes from "./Playlist.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineFastForward, AiFillFastBackward } from "react-icons/ai";
import Library from "../../library/Library";

const Playlist = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [playlists, setPlaylists] = useState(null);

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
