import { NextPage } from 'next'
import styles from '../styles/Poll.module.css'

interface MonItemProps {
	mon: any
}

const MonItem: NextPage<MonItemProps> = ({ mon }) => {
	const monImg = mon?.sprites.front_default

	return (
		<div className={styles.item_container}>
			<div className={styles.item}>
				<h2>{mon?.name}</h2>
				<img src={monImg} />
			</div>
			<div className={styles.btn}>
				<p>ROUNDER</p>
			</div>
		</div>
	)
}

export default MonItem
