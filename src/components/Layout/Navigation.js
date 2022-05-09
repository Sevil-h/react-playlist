import React, { useEffect, useState } from "react";
import classes from "./Navigation.module.css";
import apiClient from "../../hooks/useAuth";

const Navigation = (props) => {
	const [avatar, setAvatar] = useState("");
	const [username, setUsername] = useState("");
	useEffect(() => {
		// profile
		apiClient.get("https://api.spotify.com/v1/me").then((response) => {
			const data = response.data;
			console.log(response);
			setUsername(data.display_name);
			setAvatar(data.images[0].url);
		});
	}, []);
	return (
		<nav className={classes.nav}>
			<ul>
				<li>{username}</li>
				<li>
					<img className={classes.avatar} src={avatar} />
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
