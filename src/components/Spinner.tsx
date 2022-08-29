import styles from '../styles/Poll.module.css'

const Spinner = () => {
	return (
		<div className={styles.loading}>
			<h2>loading...</h2>
			<img
				src="https://64.media.tumblr.com/a5f012a2bc5a5f612c592a71c09713a3/tumblr_mrnj1lGkXQ1rfjowdo1_500.gif"
				alt="loading..."
			/>
		</div>
	)
}

export default Spinner
