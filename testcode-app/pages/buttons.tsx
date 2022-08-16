import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
import LoadingButtonsTransition from "../components/inputs/uploadButton";

const Buttons: NextPage = () => {
	return <div className={styles.container}>
		<LoadingButtonsTransition />
	</div>;
};

export default Buttons;
