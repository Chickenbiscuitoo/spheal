import { NextPage } from 'next'

interface MonItemProps {
	mon: any
}

const MonItem: NextPage<MonItemProps> = ({ mon }) => {
	return <div>{mon.name}</div>
}

export default MonItem
