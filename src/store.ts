import create from 'zustand'
import axios from 'axios'

interface MonState {
	pokemons: any[]
	roundestList: any[]
	loading: boolean
	getPokemons: () => void
	voteFor: (id: number) => void
	getRoundestList: () => void
}

const useMonStore = create<MonState>((set) => ({
	pokemons: [],
	roundestList: [],
	loading: false,

	getPokemons: async () => {
		set(() => ({ loading: true }))
		const url = 'http://localhost:3000/api/mon'
		const pokemons = await axios.get(url)
		set(() => ({ pokemons: pokemons.data, loading: false }))
	},

	voteFor: async (id: number) => {
		const url = 'http://localhost:3000/api/vote'
		const data = { id }
		await axios.patch(url, data)
		set(() => ({ pokemons: [] }))
	},

	getRoundestList: async () => {
		set(() => ({ loading: true }))
		const url = 'http://localhost:3000/api/results'
		const list = await axios.get(url)
		set(() => ({ roundestList: list.data, loading: false }))
	},
}))

export default useMonStore

// https://pokeapi.co/api/v2/pokemon/905
