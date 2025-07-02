import GameLayout from "./GameLayout";
import {RESTART_GAME} from '../constants'
import { useDispatch } from "react-redux";

export default function Game() {
	const dispatch = useDispatch()
	
	const playAgain = () => {
		dispatch({ type: RESTART_GAME});
	};
	return (
		<GameLayout playAgain={playAgain}/>
	);
}
