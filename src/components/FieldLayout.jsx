import PropTypes from 'prop-types'
import styles from "./field.module.css"

export default function FieldLayout({field,onClick}) {

	return (
		<div className={styles["btn-group"]}>

			{field.map((i,index) => {
				return (<button className={styles.btn} id={index} key={index} onClick={onClick} >{i}</button>)
			})}
			</div>
	)
}

FieldLayout.propTypes = {
  	field: PropTypes.array,
	onClick: PropTypes.func,
};
