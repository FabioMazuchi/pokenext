import Image from "next/image";
import styles from '../styles/PokeCard.module.css'
import Link from "next/link";

export default function PokeCard({ name, id }) {
  return (
      <div className={styles.pokecard}>
        <Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png `}
          width="100"
          height="100"
          alt={name}
        />
        <p>{name}</p>
        <Link href={`pokemon/${id}`}>Detalhes</Link>
      </div>
  )
}
