import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineFastForward, AiFillFastBackward } from "react-icons/ai";
import classes from "./PlaylistItem.module.css";

const PlaylistItem = () => {
	return (
		<li className={classes.listItem}>
			<AiFillFastBackward className={classes.icon} />
			<BsFillPlayFill className={classes.icon} />
			<BsPauseFill className={classes.icon} />
			<AiOutlineFastForward className={classes.icon} />
			song name
		</li>
	);
};

export default PlaylistItem;
