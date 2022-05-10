import React from "react";
import classes from "./Card.module.css";
import { FaPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { BsFillSuitHeartFill, BsArrowRepeat } from "react-icons/bs";
import Lines from "./Lines";

const Card = () => {
	return (
		<div className={classes.card}>
			<div className={classes.playContainer}>
				<img
					src="https://i.pinimg.com/564x/3d/a7/67/3da767e496b4b28276f852ee7c81d702.jpg"
					className={classes.image}
					alt="image"
				/>
				<FaPlayCircle className={classes.icon} />
				{/* <FaRegStopCircle className={classes.icon} /> */}
				<div className={classes.smallEffect}></div>
				<div className={classes.bigEffect}></div>
			</div>
			<div className={classes.details}>
				<h2>Tearing me up</h2>
				<h4>Bob Mmoses</h4>
				{/* <Lines /> */}
				<p className={classes.time}>4.05</p>
			</div>
			<div className={classes.icons}>
				<BsArrowRepeat className={classes.socialIcon} />
				<BsFillSuitHeartFill className={classes.socialIcon} />
			</div>
		</div>
	);
};

export default Card;
