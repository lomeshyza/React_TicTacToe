import PropTypes from 'prop-types'
import styles from "./information.module.css"

export default function InformationLayout( {status} ) {

	return (
	<p className={styles.info}>{status}</p>
)
}

InformationLayout.propTypes = {
  status: PropTypes.string
};
