import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai'
import useMonStore from '../store'
import { useEffect } from 'react'
import ListItem from '../components/ListItem'
import Spinner from '../components/Spinner'

const Results: NextPage = () => {
	const { roundestList, getRoundestList, loading } = useMonStore()

	useEffect(() => {
		getRoundestList()
	}, [])

	const listItems = roundestList.map((item) => (
		<ListItem
			key={item.id}
			position={item.position}
			name={item.name}
			image={item.image}
		/>
	))

	return (
		<div className={styles.container}>
			<Head>
				<title>roundest-mon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>roundest-mon</h1>

				<p className={styles.description}>
					Top 10 roundest pokemons
				</p>

				<Link href="/">
					<a className={styles.link}>vote</a>
				</Link>

				{loading ? (
					<Spinner />
				) : (
					<div className={styles.list}>{listItems}</div>
				)}
			</main>

			<footer className={styles.footer}>
				<a
					href="https://github.com/Chickenbiscuitoo"
					target="_blank"
					rel="noopener noreferrer"
				>
					Created by Chickenbiscuitoo
					<span className={styles.logo}>
						<AiFillGithub />
					</span>
				</a>
			</footer>
		</div>
	)
}

export default Results
