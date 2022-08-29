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
		const mon1data = mon1res.data
		const mon2data = mon2res.data

		try {
			await prisma.pokemons.upsert({
				where: {
					id: mon1data.id,
				},
				update: {
					appeared: {
						increment: 1,
					},
				},
				create: {
					id: mon1data.id,
					appeared: 1,
					voted_for: 0,
				},
			})

			await prisma.pokemons.upsert({
				where: {
					id: mon2data.id,
				},
				update: {
					appeared: {
						increment: 1,
					},
				},
				create: {
					id: mon2data.id,
					appeared: 1,
					voted_for: 0,
				},
			})
		} catch (error) {
			let message = 'Unknown Error'

			if (error instanceof Error) message = error.message
			else message = String(error)

			return res.status(500).json({ message })
		}

		return res.status(200).json({
			pokemons: [
				{
					id: mon1data.id,
					name: mon1data.name,
					image: mon1data.sprites.front_default,
				},
				{
					id: mon2data.id,
					name: mon2data.name,
					image: mon2data.sprites.front_default,
				},
			],
		})
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}
