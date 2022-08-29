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
		const result = await prisma.pokemons.findMany({
			orderBy: [
				{
					voted_for: 'desc',
				},
				{
					appeared: 'desc',
				},
			],
			take: 10,
		})

		const pokeURL = 'https://pokeapi.co/api/v2/pokemon/'
		const requestsArr = result.map((e) =>
			axios.get(`${pokeURL}${e.id}`)
		)
		const responses = await Promise.all(requestsArr)

		const results = responses.map((p, i) => {
			return {
				position: i + 1,
				id: p.data.id,
				name: p.data.name,
				image: p.data.sprites.front_default,
			}
		})

		return res.status(200).json(results)
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}
