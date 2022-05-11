import { NavLink } from "react-router-dom";
import { VscLibrary } from "react-icons/vsc";
import { BsMusicNoteList, BsMusicPlayerFill } from "react-icons/bs";
import classes from "./Navigation.module.css";

const Navigation = () => {
	return (
		<nav className={classes.playlist}>
			<NavLink
				to="/library"
				className={(navData) =>
					navData.isActive ? classes.active : classes.link
				}
			>
				<VscLibrary />
			</NavLink>
			<NavLink
				to="/playlist"
				className={(navData) =>
					navData.isActive ? classes.active : classes.link
				}
			>
				<BsMusicNoteList />
			</NavLink>
			<NavLink
				to="/"
				className={(navData) =>
					navData.isActive ? classes.active : classes.link
				}
			>
				<BsMusicPlayerFill />
			</NavLink>
		</nav>
	);
};

export default Navigation;
