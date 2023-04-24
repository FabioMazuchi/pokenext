import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Pokemon.module.css'

export async function getStaticPaths() {
	const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=30')
	const { results } = await data.json()
	const paths = results.map((pokemon, index) => {
		return {
			params: {
				pokeId: (index + 1).toString()
			}
		}
	})
	return { paths, fallback: false }
}


export async function getStaticProps(context) {
	const { params } = context
	const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`)

	const pokemon = await data.json()
	return { props: { pokemon } }
}

export default function Pokemon({ pokemon }) {
  return (
    <>
      <Head>
        <title>{pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</title>
      </Head>
	  <main className={styles.pokemon}>
      	<h1>{pokemon.name}</h1>
		<div>
			<Image
				src={pokemon.sprites.front_default}
				height="170"
				width="170"
				alt={pokemon.name}
			/>
			<Image
				src={pokemon.sprites.back_default}
				height="150"
				width="150"
				alt={pokemon.name}
			/>
		</div>
		<h2>Peso: {pokemon.weight}Kg</h2>
	  </main>
    </>
  )
}
