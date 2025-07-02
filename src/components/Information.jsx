import PropTypes from "prop-types";
import InformationLayout from "./InformationLayout";
import { useSelector } from "react-redux";
import {selectIsDraw, selectCurrentPlayer, selectIsGameEnded } from '../selectors'

export default function Information() {

	const isDraw = useSelector(selectIsDraw) //({selectIsDraw})=>selectIsDraw
	const isGameEnded = useSelector(selectIsGameEnded)
	const currentPlayer = useSelector(selectCurrentPlayer)

	let status = "";
	if (isDraw === true ) {
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
