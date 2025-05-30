import PropTypes from 'prop-types'
//import { useState } from "react"
import FieldLayout from './FieldLayout'

export default function Field({props}) {
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

	function click(evt) {

		if (props.field.includes('') && !props.isGameEnded) {
			props.field[evt.target.id] = props.currentPlayer
			props.setCurrentPlayer(props.currentPlayer === 'X' ? '0' : 'X')
		}
		if (!props.field.includes('') && !props.isGameEnded) {
			props.setIsDraw(true)
		}
		for (let pattern of WIN_PATTERNS) {
			if ((props.field[pattern[0]] === 'X' && props.field[pattern[1]] === 'X' && props.field[pattern[2]] === 'X')) {
				props.setCurrentPlayer('X')
				props.setIsGameEnded(true)
			}else if ((
				props.field[pattern[0]] === '0' && props.field[pattern[1]] === '0' && props.field[pattern[2]]=== '0'
			)) {
				props.setCurrentPlayer('0')
				props.setIsGameEnded(true)
			}
		}
	}

	return (
		<FieldLayout field={props.field} onClick={click} />
	)
}

Field.propTypes = {
	['props.isDraw']: PropTypes.bool,
	['props.isGameEnded']: PropTypes.bool,
	['props.currentPlayer']: PropTypes.string,
	['props.field']: PropTypes.array,
	['props.setCurrentPlayer']: PropTypes.func,
	['props.setIsGameEnded']: PropTypes.func,
	['props.setIsDraw']: PropTypes.func,
};
