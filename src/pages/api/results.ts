import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../server/client'

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

		return res.status(200).json(result)
	} catch (error) {
		let message = 'Unknown Error'

		if (error instanceof Error) message = error.message
		else message = String(error)

		return res.status(500).json({ message })
	}
}
