import classes from "./Card.module.css";
import Navigation from "../Navigation/Navigation";
const Card = (props) => {
	return (
		<div className={classes.card}>
			<Navigation />
			{props.children}
		</div>
	);
};

export default Card;
