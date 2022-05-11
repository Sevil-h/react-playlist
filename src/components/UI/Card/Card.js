import React, { useState, useEffect } from "react";
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = (props) => {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className={classes.card}>
			<div className={classes.playlist}>
				{!isShow ? (
					<Link
						to="/playlist"
						className={classes.playlist}
						onClick={() => setIsShow(!isShow)}
					>
						Playlist
					</Link>
				) : (
					<Link to="/" onClick={() => setIsShow(!isShow)}>
						Home
					</Link>
				)}
			</div>
			{props.children}
		</div>
	);
};

export default Card;
