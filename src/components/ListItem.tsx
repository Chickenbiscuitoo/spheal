import type { NextPage } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

interface ListItemProps {
	id: number
}

const ListItem: NextPage<ListItemProps> = ({ id }) => {
	return <div>{id}</div>
}

export default ListItem
