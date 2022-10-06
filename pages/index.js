import Link from "next/link";
import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="nba,franchise,teams"></meta>
        <meta name="description" content="encontre tudo de nba aqui"></meta>
      </Head>
      <h1>O que Eu Vi Hoje?</h1>
      <br/>
      <Link href="/movieReviews">
        <a>Filmes</a>
      </Link>
      <br/>
      <Link href="/tvshowsReviews">
        <a>Séries</a>
      </Link>
    </div>
  );
}
// pode ser usar componente direto na pagina <Navbar /> nesse caso
