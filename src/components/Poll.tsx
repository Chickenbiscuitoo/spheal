import { NextPage } from 'next'
import styles from '../styles/Poll.module.css'

import useMonStore from '../store'
import { useEffect } from 'react'

import MonItem from './MonItem'

const Poll: NextPage = () => {
	const { pokemons, getPokemons } = useMonStore()

	useEffect(() => {
		console.log('useEffect executed')
		getPokemons()
	}, [])

	return (
		<div className={styles.container}>
			<MonItem
				key={pokemons[0]?.id}
				id={pokemons[0]?.id}
				name={pokemons[0]?.name}
				image={pokemons[0]?.image}
			/>
			<MonItem
				key={pokemons[1]?.id}
				id={pokemons[1]?.id}
				name={pokemons[1]?.name}
				image={pokemons[1]?.image}
			/>
		</div>
	)
}

export default Poll
