import { Fragment } from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
	return (
		<Fragment>
			<main className={classes.body}>
				<div>{props.children}</div>
				<div className={classes.waveContainer}>
					<div className={classes.wave}></div>
					<div className={classes.wave}></div>
					<div className={classes.wave}></div>
				</div>
			</main>
		</Fragment>
	);
};

export default Layout;
