import styles from "../styles/Todos.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();

  // console.log(todos)

  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>To Dos</title>
        <meta name="keywords" content="nba,players,produtos"></meta>
        <meta name="description" content="encontre tudo de nba aqui"></meta>
        {/* -- essa tag é o título do HTML comum */}
      </Head>

      <h1>Tarefas Para Fazer:</h1>
      <ul className={styles.todolist}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
