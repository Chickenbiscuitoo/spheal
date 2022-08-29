import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/client'
import axios from 'axios'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req

	if (method !== 'GET') {
		return res.status(400).json({ message: 'Only GET method allowed' })
	}

	try {
		const pokeURL = 'https://pokeapi.co/api/v2/pokemon/'
		const randomNum1 = Math.floor(Math.random() * 900) + 1
		const randomNum2 = Math.floor(Math.random() * 900) + 1
		const mon1 = pokeURL + randomNum1
		const mon2 = pokeURL + randomNum2

		const responses = await Promise.all([
			axios.get(mon1),
			axios.get(mon2),
		])
		const [mon1res, mon2res] = responses
		return res
			.status(200)
			.json({ pokemons: [mon1res.data, mon2res.data] })
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}
