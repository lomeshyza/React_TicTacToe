import styles from "./game.module.css";
import PropTypes from "prop-types";
import Field from "./Field";
import Information from "./Information";

export default function GameLayout({playAgain}) {

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Крестики-Нолики</h1>
			<Information />
			<Field />
			<button className={styles["start-btn"]} onClick={() => playAgain()}>
				Начать заново
			</button>
		</div>
	);
}
GameLayout.propTypes = {
	["playAgain"]: PropTypes.func,
};
