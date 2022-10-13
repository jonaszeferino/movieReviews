import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/myPlayers">
          <a>Meus Jogadores</a>
        </Link>
      </li>
      <li>
        <Link href="/addPlayers">
          <a>Adicionar Jogadores</a>
        </Link>
      </li>   
  </ul>
  );
}

// index vai ser sempre o '/' ou seja acesso a pasta raiz
