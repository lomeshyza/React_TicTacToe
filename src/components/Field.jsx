import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import FieldLayout from "./FieldLayout";
import { store } from "./redux/store";
import {WIN_PATTERNS,SET_CURRENT_PLAYER,SET_FIELD,SET_IS_DRAW,SET_IS_GAME_ENDED } from '../constants'

export default function Field() {
	const [storeRender, setStoreRender] = useState(store.getState());
	const { field, isGameEnded, currentPlayer } = storeRender;

	useEffect(() => {
		setStoreRender(store.getState());
		store.subscribe(() => setStoreRender(store.getState()));
	}, []);


	function click(evt) {
		const newField = [...field];
		store.dispatch({ type: SET_FIELD, payload: newField });

		if (newField.includes("") && !isGameEnded) {
			newField[evt.target.id] = currentPlayer;

			store.dispatch({
				type: SET_CURRENT_PLAYER,
				payload: currentPlayer === "X" ? "0" : "X",
			});
		}
		if (!newField.includes("") && !isGameEnded) {
			store.dispatch({ type: SET_IS_DRAW, payload: true });
		}
		for (let pattern of WIN_PATTERNS) {
			if (
				newField[pattern[0]] === "X" &&
				newField[pattern[1]] === "X" &&
				newField[pattern[2]] === "X"
			) {
				store.dispatch({ type: SET_CURRENT_PLAYER, payload: "X" });
				store.dispatch({ type: SET_IS_GAME_ENDED, payload: true });
			} else if (
				newField[pattern[0]] === "0" &&
				newField[pattern[1]] === "0" &&
				newField[pattern[2]] === "0"
			) {
				store.dispatch({ type: SET_CURRENT_PLAYER, payload: "0" });
				store.dispatch({ type: SET_IS_GAME_ENDED, payload: true });
			}
		}

		setStoreRender(store.getState());
	}

	return <FieldLayout onClick={click} />;
}

Field.propTypes = {
	["isDraw"]: PropTypes.bool,
	["isGameEnded"]: PropTypes.bool,
	["currentPlayer"]: PropTypes.string,
	["field"]: PropTypes.array,
};
