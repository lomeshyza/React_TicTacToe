import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import InformationLayout from "./InformationLayout";
import { store } from "./redux/store";

export default function Information() {
	const [storeRender, setStoreRender] = useState(store.getState());
	const { isDraw, isGameEnded, currentPlayer } = storeRender;

	useEffect(() => {
		setStoreRender(store.getState());
		store.subscribe(() => setStoreRender(store.getState()));
	}, []);

	let status = "";
	if (isDraw === true) {
		status = "Ничья";
	} else if (isDraw === false && isGameEnded === true) {
		status = `Победа: ${currentPlayer}`;
	} else if (isDraw === false && isGameEnded === false) {
		status = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout status={status} />;
}

Information.propTypes = {
	["isDraw"]: PropTypes.bool,
	["isGameEnded"]: PropTypes.bool,
	["currentPlayer"]: PropTypes.string,
};
