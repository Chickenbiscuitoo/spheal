import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/client'
import { z } from 'zod'

const schema = z.object({
	id: z.number().min(1).max(900),
})

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req

	if (method !== 'PATCH') {
		return res
			.status(400)
			.json({ message: 'Only PATCH method allowed' })
	}

	try {
		const data = schema.parse(req.body)

		const poke = await prisma.pokemons.update({
			where: {
				id: data.id,
			},
			data: {
				voted_for: {
					increment: 1,
				},
			},
		})
		return res.status(200).json({ id: poke.id })
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}
