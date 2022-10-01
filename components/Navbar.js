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
        <Link href="/products">
          <a>Cinema Reviews</a>
        </Link>
      </li>
      <li>
        <Link href="/products/times">
          <a>Cinema Ratings</a>
        </Link>
      </li>
      <li>
        <Link href="/todos">
          <a>Series Reviews</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Series Ratings</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
      </li>
    </ul>
  );
}

// index vai ser sempre o '/' ou seja acesso a pasta raiz
