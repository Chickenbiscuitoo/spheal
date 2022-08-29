import create from 'zustand'
import axios from 'axios'

interface MonState {
	pokemons: any[]
	getPokemons: () => void
}

const useMonStore = create<MonState>((set) => ({
	pokemons: [],

	getPokemons: () => {
		console.log('exec getPokemons')
		const url = 'https://pokeapi.co/api/v2/pokemon/'
		const randomNum1 = Math.floor(Math.random() * 900) + 1
		const randomNum2 = Math.floor(Math.random() * 900) + 1
		const mon1 = url + randomNum1
		const mon2 = url + randomNum2

		Promise.all([axios.get(mon1), axios.get(mon2)]).then(
			(responses) => {
				const [mon1res, mon2res] = responses
				set(() => ({
					pokemons: [mon1res.data, mon2res.data],
				}))
			}
		)
	},
}))

export default useMonStore

// https://pokeapi.co/api/v2/pokemon/905
