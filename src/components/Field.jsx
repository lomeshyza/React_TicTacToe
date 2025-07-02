import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout";
import { useDispatch, useSelector } from "react-redux";
import { WIN_PATTERNS, SET_CURRENT_PLAYER, SET_FIELD, SET_IS_DRAW, SET_IS_GAME_ENDED } from '../constants'
import {selectField, selectCurrentPlayer, selectIsGameEnded } from '../selectors'

export default function Field() {
	const field = useSelector(selectField) //({field})=>field
	const isGameEnded = useSelector(selectIsGameEnded)
	const currentPlayer = useSelector(selectCurrentPlayer)
	const dispatch = useDispatch()

	function click(evt) {
		const newField = [...field];
		dispatch({ type: SET_FIELD, payload: newField });

		if (newField.includes("") && !isGameEnded && newField[evt.target.id]==='') {
			newField[evt.target.id] = currentPlayer;

			dispatch({
				type: SET_CURRENT_PLAYER,
				payload: currentPlayer === "X" ? "0" : "X",
			});
		}

		if (!newField.includes("") && !isGameEnded) {
			dispatch({ type: SET_IS_DRAW, payload: true });
		}
		for (let pattern of WIN_PATTERNS) {
			if (
				newField[pattern[0]] === "X" &&
				newField[pattern[1]] === "X" &&
				newField[pattern[2]] === "X"
			) {
				dispatch({ type: SET_CURRENT_PLAYER, payload: "X" });
				dispatch({ type: SET_IS_GAME_ENDED, payload: true });
			} else if (
				newField[pattern[0]] === "0" &&
				newField[pattern[1]] === "0" &&
				newField[pattern[2]] === "0"
			) {
				dispatch({ type: SET_CURRENT_PLAYER, payload: "0" });
				dispatch({ type: SET_IS_GAME_ENDED, payload: true });
			}
		}
	}

	return <FieldLayout onClick={click} />;
}

Field.propTypes = {
	["isDraw"]: PropTypes.bool,
	["isGameEnded"]: PropTypes.bool,
	["currentPlayer"]: PropTypes.string,
	["field"]: PropTypes.array,
};
