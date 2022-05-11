import classes from "./PlaylistsItem.module.css";
import React, { useContext } from "react";
import { DataLayerContext } from "../../../context/DataLayer";
import { MdOutlineMusicNote } from "react-icons/md";

const PlaylistsItem = () => {
	const [{ playlists }] = useContext(DataLayerContext);
	console.log("playlists", playlists);
	return (
		<>
			{playlists?.items?.map((playlist) => (
				<li key={playlist.id}>
					<span className={classes.icon}>
						<MdOutlineMusicNote />
					</span>
					{playlist.name}
				</li>
			))}
		</>
	);
};

export default PlaylistsItem;
