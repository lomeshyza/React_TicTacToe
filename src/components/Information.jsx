import PropTypes from 'prop-types'
import InformationLayout from './InformationLayout'

export default function Information ({props}) {
let status = ''
	if (props.isDraw === true) {
		status = 'Ничья'
	} else if (props.isDraw === false && props.isGameEnded === true) {
		status = `Победа: ${props.currentPlayer}`
	} else if (props.isDraw === false && props.isGameEnded === false) {
		status = `Ходит: ${props.currentPlayer}`
	}
	return (
		<InformationLayout status={ status} />
	)
}

Information.propTypes = {
	['props.isDraw']: PropTypes.bool,
	['props.isGameEnded']: PropTypes.bool,
	['props.currentPlayer']: PropTypes.string,
};
