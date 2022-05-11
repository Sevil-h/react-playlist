import classes from "./Playlist.module.css";
import PlaylistItem from "./PlaylistItem";

const Playlist = () => {
	return (
		<div className={classes.playlist}>
			<ul className={classes.list}>
				<PlaylistItem />
			</ul>
		</div>
	);
};

export default Playlist;
