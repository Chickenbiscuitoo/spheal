import { NextPage } from 'next'
import styles from '../styles/Poll.module.css'

import useMonStore from '../store'

interface MonItemProps {
	id: number
	name: string
	image: string
}

const MonItem: NextPage<MonItemProps> = ({ id, name, image }) => {
	const { voteFor, getPokemons } = useMonStore()

	const handleClick = () => {
		voteFor(id)
		getPokemons()
	}

	return (
		<div className={styles.item_container}>
			<div className={styles.item}>
				<h2>{name}</h2>
				<img src={image} />
			</div>
			<div className={styles.btn}>
				<p onClick={handleClick}>ROUNDER</p>
			</div>
		</div>
	)
}

export default MonItem
