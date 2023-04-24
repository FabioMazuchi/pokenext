import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
      <header className={styles.header}>
        <div>
          <Image alt='Pokebola' src="/images/pokebola.png" width="35" height="35"/>
          <h1>PokeNext</h1>
        </div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
        </ul>
      </header>
  )
}
