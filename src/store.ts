import create from 'zustand'
import axios from 'axios'
import { useEffect } from 'react'

interface MonState {
	pokemons: any[]
	getPokemons: () => void
	voteFor: (id: number) => void
}

const useMonStore = create<MonState>((set) => ({
	pokemons: [],

	getPokemons: async () => {
		const url = 'http://localhost:3000/api/mon'
		const pokemons = await axios.get(url)
		set(() => ({ pokemons: pokemons.data }))
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
