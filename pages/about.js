import Link from "next/link";
import Head from "next/head";
export default function About() {
  return (
    <div>
      <Head>
      <title>Sobre</title>
      <meta name="keywords" content="nba,franchise,teams"></meta>
      <meta name="description" content="encontre tudo de nba aqui"></meta>
      </Head>
      <h1>Estou em About</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}
// pode ser usar componente direto na pagina <Navbar /> nesse caso
