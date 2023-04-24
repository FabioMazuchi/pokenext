import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokeCard from '@/components/PokeCard'

export async function getStaticProps() {
	const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30')
	const { results } = await data.json()

  results.forEach((pokemon, id) => {
    pokemon.id = id +1
  })
	return { props: { results } }
}

export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.home}>
        <section>
          {results.map(({name, id}) => (
            <PokeCard key={id} name={name} id={id} />
          ))}
        </section>
      </main>
    </>
  )
}
