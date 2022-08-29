import create from 'zustand'
import axios from 'axios'
import { useEffect } from 'react'

interface MonState {
	pokemons: any[]
	loading: boolean
	getPokemons: () => void
	voteFor: (id: number) => void
}

const useMonStore = create<MonState>((set) => ({
	pokemons: [],
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
}))

export default useMonStore

// https://pokeapi.co/api/v2/pokemon/905
