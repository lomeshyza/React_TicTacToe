import { useState } from "react"
import GameLayout from "./GameLayout";

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	])
	function playAgain() {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField([
		'', '', '',
		'', '', '',
		'', '', '',
	])
	}
	return (
		<GameLayout playAgain={playAgain} field={field} currentPlayer={currentPlayer} isGameEnded={isGameEnded} setIsGameEnded={setIsGameEnded} isDraw={isDraw} setIsDraw={setIsDraw} setCurrentPlayer={setCurrentPlayer} />

	);
}

