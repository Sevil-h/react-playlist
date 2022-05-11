import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineForward, AiFillBackward } from "react-icons/ai";
import classes from "./PlaylistItem.module.css";

const PlaylistItem = () => {
	return (
		<li className={classes.listItem}>
			<AiFillBackward className={classes.icon} />
			<BsFillPlayFill className={classes.icon} />
			<BsPauseFill className={classes.icon} />
			<AiOutlineForward className={classes.icon} />
			<span>song name</span>
		</li>
	);
};

export default PlaylistItem;
