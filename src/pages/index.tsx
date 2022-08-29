import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai'
import Poll from '../components/Poll'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>roundest-mon</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>roundest-mon</h1>

				<p className={styles.description}>
					Vote below to find the roundest pokemon!
				</p>

				<Link href="/results">
					<a className={styles.link}>results</a>
				</Link>

				<Poll />
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

export default Home
