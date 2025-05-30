
import styles from "./game.module.css"
import PropTypes from 'prop-types'
import Field from "./Field";
import Information from "./Information";

export default function GameLayout(props) {

	return (
		<div className={styles.container}>
			<h1 className={styles.h1} >Крестики-Нолики</h1>
			<Information props={props}/>
			<Field props={props} />
				<button className={styles['start-btn']} onClick={props.playAgain}>Начать заново</button>
		</div>
	);
}
GameLayout.propTypes = {
	['props.playAgain']: PropTypes.func,
};
