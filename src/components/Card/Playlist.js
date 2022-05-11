import classes from "./Playlist.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { AiOutlineFastForward, AiFillFastBackward } from "react-icons/ai";

const Playlist = () => {
	return (
		<div className={classes.playlist}>
			<ul className={classes.list}>
				<li className={classes.listItem}>
					<AiFillFastBackward className={classes.icon} />
					<BsFillPlayFill className={classes.icon} />
					<BsPauseFill className={classes.icon} />
					<AiOutlineFastForward className={classes.icon} />
					song name
				</li>
			</ul>
		</div>
	);
};

export default Playlist;
