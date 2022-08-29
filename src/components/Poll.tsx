import { NextPage } from 'next'
import useMonStore from '../store'

const Poll: NextPage = () => {
	const { getPokemons, pokemons } = useMonStore()

	console.log(pokemons)

	return (
		<div>
			<button onClick={() => getPokemons()}>GET POKEMONS</button>
		</div>
	)
}

export default Poll
