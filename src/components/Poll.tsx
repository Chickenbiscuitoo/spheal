import { NextPage } from 'next'
import styles from '../styles/Poll.module.css'

import useMonStore from '../store'
import { useEffect } from 'react'

import MonItem from './MonItem'
import Spinner from './Spinner'

const Poll: NextPage = () => {
	const { pokemons, getPokemons, loading } = useMonStore()

	useEffect(() => {
		console.log('useEffect executed')
		getPokemons()
	}, [])

	if (loading) {
		return <Spinner />
	}

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
