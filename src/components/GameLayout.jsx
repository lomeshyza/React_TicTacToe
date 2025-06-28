import styles from "./game.module.css";
import PropTypes from "prop-types";
import Field from "./Field";
import Information from "./Information";
import {RESTART_GAME} from '../constants'
import { store } from "./redux/store";

export default function GameLayout() {
	const playAgain = () => {
		store.dispatch({ type: RESTART_GAME});
	};
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
