import styles from '../styles/Landing.module.css'

export const Error = ({ children }) => {
	return (
		<>
			<h3 className={styles.error}>{children}</h3>
		</>
	)
}

export const Success = ({ children }) => {
	return (
		<>
			<h3 className={styles.success}>{children}</h3>
		</>
	)
}
