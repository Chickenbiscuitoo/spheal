import { NextPage } from 'next'
import { useEffect } from 'react'

import useMonStore from '../store'

import MonItem from './MonItem'

const Poll: NextPage = () => {
	const { getPokemons, pokemons } = useMonStore()

	useEffect(() => {
		getPokemons()
	}, [])

	const pokemonItems = pokemons.map((mon) => (
		<MonItem key={mon.id} mon={mon} />
	))

	return <div>{pokemons && pokemonItems}</div>
}

export default Poll
