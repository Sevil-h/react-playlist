import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VscLibrary } from "react-icons/vsc";
import { BsMusicNoteList, BsMusicPlayerFill } from "react-icons/bs";
import classes from "./Navigation.module.css";
import { DataLayerContext } from "../../../context/DataLayer";

const Navigation = () => {
	const [{ user }] = useContext(DataLayerContext);
	return (
		<nav className={classes.playlist}>
			{user ? <p className={classes.name}>{user.display_name}</p> : ""}
			<div>
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
			</div>
		</nav>
	);
};

export default Navigation;
