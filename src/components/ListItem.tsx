import type { NextPage } from 'next'
import styles from '../styles/ListItem.module.css'

interface ListItemProps {
	position: number
	name: string
	image: string
}

const ListItem: NextPage<ListItemProps> = ({ position, name, image }) => {
	const getPositionClass = () => {
		if (position === 1) {
			return 'n1'
		} else if (position === 2) {
			return 'n2'
		} else if (position === 3) {
			return 'n3'
		} else {
			return 'position'
		}
	}

	return (
		<div className={styles.list}>
			<h4 className={styles[getPositionClass()]}>{position}</h4>
			<img src={image} alt={name} />
			<h4 className={styles.name}>{name}</h4>
		</div>
	)
}

export default ListItem
