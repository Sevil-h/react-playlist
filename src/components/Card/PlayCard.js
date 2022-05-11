import React, { useState } from "react";
import classes from "./Card.module.css";
import { FaPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { BsFillSuitHeartFill, BsArrowRepeat } from "react-icons/bs";
import { AiOutlineForward, AiFillBackward } from "react-icons/ai";
import "./index.css";

const PlayCard = ({ spotify }) => {
	const [isPlaying, setIsPlaying] = useState(true);

	// let animation;
	// let index = 0;
	// const lines = document.querySelectorAll(".line");
	// if (isPlaying) {
	// 	animation = setInterval(() => {
	// 		lines[index].classList.remove("color");
	// 		index += 1;
	// 	}, 1000);
	// } else {
	// 	clearInterval(animation);
	// }

	return (
		<div className={classes.play}>
			<div className={classes.playContainer}>
				<img
					src="https://i.pinimg.com/564x/3d/a7/67/3da767e496b4b28276f852ee7c81d702.jpg"
					className={isPlaying ? classes.image : classes.stop}
					alt="image"
				/>
				{isPlaying ? (
					<FaPlayCircle
						className={classes.icon}
						onClick={() => setIsPlaying(false)}
					/>
				) : (
					<FaRegStopCircle
						className={classes.icon}
						onClick={() => setIsPlaying(true)}
					/>
				)}
				<div className={classes.smallEffect}></div>
				<div className={classes.bigEffect}></div>
			</div>
			{/* <div className={classes.moveIcons}>
				<AiFillBackward className={classes.moveIcon} />
				<AiOutlineForward className={classes.moveIcon} />
			</div> */}
			<div className={classes.details}>
				<h2>Tearing me up</h2>
				<h4>Bob Mmoses</h4>
				<div className="linesWrapper">
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
					<div className="line color"></div>
				</div>
				<p className={classes.time}>4.05</p>
			</div>
			<div className={classes.icons}>
				<BsArrowRepeat className={classes.socialIcon} />
				<BsFillSuitHeartFill className={classes.socialIcon} />
			</div>
		</div>
	);
};

export default PlayCard;
