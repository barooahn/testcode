import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import Longpress from "../components/icons/Longpress";
import SwipeUpIcon from "../components/icons/SwipeUpIcon";

const Buttons: NextPage = () => {
	return (
		<div className={styles.container}>
			<Longpress fontSize='large' />
			<SwipeUpIcon fontSize='large' />
		</div>
	);
};

export default Buttons;
