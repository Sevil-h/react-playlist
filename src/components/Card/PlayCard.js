import React, { useState, useContext } from "react";
import { DataLayerContext } from "../../context/DataLayer";
import classes from "./Card.module.css";
import { FaPlayCircle, FaRegStopCircle } from "react-icons/fa";
import { BsFillSuitHeartFill, BsArrowRepeat } from "react-icons/bs";
import "./index.css";

const PlayCard = () => {
	const [isPlaying, setIsPlaying] = useState(true);
	const [playingTrack, setPlayingTrack] = useState();
	const [{ currentSong, token, trackUri }] = useContext(DataLayerContext);
	const playingHandler = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className={classes.play}>
			<div className={classes.playContainer}>
				<img
					src={
						currentSong
							? currentSong?.item.album.images[0].url
							: "https://i.scdn.co/image/ab67616d00001e02d6df3bccf3ec41ea2f76debc"
					}
					className={isPlaying ? classes.image : classes.stop}
					alt="image"
				/>
				{isPlaying ? (
					<FaPlayCircle className={classes.icon} onClick={playingHandler} />
				) : (
					<FaRegStopCircle className={classes.icon} onClick={playingHandler} />
				)}
				<div className={classes.smallEffect}></div>
				<div className={classes.bigEffect}></div>
			</div>
			<div className={classes.details}>
				{currentSong ? <h2>{currentSong?.item.name}</h2> : <h2>"Budapest"</h2>}
				{currentSong ? (
					<h4>{currentSong?.item.artists[0].name}</h4>
				) : (
					<h4>"George Ezra"</h4>
				)}
				<div className="linesWrapper">
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
					<div className={isPlaying ? "line color" : "line colorStop"}></div>
				</div>
			</div>
			<div className={classes.icons}>
				<BsArrowRepeat className={classes.socialIcon} />
				<BsFillSuitHeartFill className={classes.socialIcon} />
			</div>
		</div>
	);
};

export default PlayCard;
