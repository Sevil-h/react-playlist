import React, { useState } from "react";
import classes from "./Card.module.css";
import Library from "../../../library/Library";
const Card = (props) => {
	return (
		<div className={classes.card}>
			<div className={classes.playlist}>
				<a href="#" className={classes.link}>
					Playlist
				</a>
			</div>
			{props.children}
		</div>
	);
};

export default Card;
