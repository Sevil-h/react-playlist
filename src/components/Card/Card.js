import React from "react";
import classes from "./Card.module.css";
import { FaPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { BsFillSuitHeartFill, BsArrowRepeat } from "react-icons/bs";

const Card = () => {
	return (
		<div className={classes.card}>
			<div className={classes.bigPlay}>
				<img className={classes.image} />
				<div className={classes.smallEffect}></div>
				<div className={classes.bigEffect}></div>
			</div>
			<div className={classes.details}>
				<h2>Tearing me up</h2>
				<h4>Bob Mmoses</h4>
				<div className={classes.linesWrapper}>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
					<div className={classes.line}></div>
				</div>
				<p className={classes.time}>4.05</p>
				<div className={classes.icons}>
					<BsArrowRepeat className={classes.icon} />
					<BsFillSuitHeartFill className={classes.icon} />
				</div>
			</div>
		</div>
	);
};

export default Card;
