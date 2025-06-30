import PropTypes from "prop-types";
import styles from "./field.module.css";
import { store } from "./redux/store";
export default function FieldLayout({ onClick }) {
	const field = store.getState().field;

	return (
		<div className={styles["btn-group"]}>
			{field.map((i, index) => {
				return (
					<button
						className={styles.btn}
						id={index}
						key={index}
						onClick={onClick}
					>
						{i}
					</button>
				);
			})}
		</div>
	);
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};
