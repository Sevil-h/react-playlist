import React, { useContext } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineForward, AiFillBackward } from "react-icons/ai";
import classes from "./PlaylistItem.module.css";
import { DataLayerContext } from "../../context/DataLayer";

const PlaylistItem = () => {
	const [{ playlist }] = useContext(DataLayerContext);
	console.log(playlist);
	return (
		<>
			{playlist?.tracks?.items?.map((item) => (
				<li className={classes.listItem} key={item.track.id}>
					<AiFillBackward className={classes.icon} />
					<BsFillPlayFill className={classes.icon} />
					<BsPauseFill className={classes.icon} />
					<AiOutlineForward className={classes.icon} />
					<span>
						{item.track.artists[0].name} - {item.track.name}
					</span>
				</li>
			))}
		</>
	);
};

export default PlaylistItem;
