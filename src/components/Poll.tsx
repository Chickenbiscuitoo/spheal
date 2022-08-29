import { NextPage } from 'next'
import styles from '../styles/Poll.module.css'

import { useEffect } from 'react'

import useMonStore from '../store'

import MonItem from './MonItem'

const Poll: NextPage = () => {
	const { getPokemons, pokemons } = useMonStore()

	useEffect(() => {
		getPokemons()
	}, [])

	return (
		<div className={styles.container}>
			<MonItem key={pokemons[0]?.id} mon={pokemons[0]} />
			<MonItem key={pokemons[1]?.id} mon={pokemons[1]} />
		</div>
	)
}

export default Poll
