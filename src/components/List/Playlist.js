import React, { useContext } from "react";
import classes from "./Playlist.module.css";
import PlaylistItem from "./PlaylistItem";
import { DataLayerContext } from "../../context/DataLayer";

const Playlist = () => {
	const [{ playlist }] = useContext(DataLayerContext);
	return (
		<div className={classes.playlist}>
			<p className={classes.listName}>{playlist.name}</p>
			<ul className={classes.list}>
				<PlaylistItem />
			</ul>
		</div>
	);
};

export default Playlist;
