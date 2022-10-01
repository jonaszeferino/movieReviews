import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  let [movieName, setMovieName] = useState();
  let [movieRating, setMovieRating] = useState();
  let [movieComments, setComments] = useState();
  let [originalMovieName, setOriginalMovieName] = useState();
  let [viewDate, setViewDate] = useState();
  let [localOfView, setLocalOfView] = useState();
  let [director, setDirector] = useState();

  function submitMovieReview(event) {
    event.preventDefault(); //previne que o evento de submit do browser causado pelo click no botão, de um refresh na tela
    const movieReviewObject = {
      viewer: "Jonas Zeferino",
      movieName: movieName,
      originalMovieName: originalMovieName,
      viewDate: viewDate,
      viewRate: movieRating,
      comments: movieComments,
      director: director,
      localOfView: localOfView,
      actors: [
        {
          name: "Ator 1",
        },
        {
          name: "Ator 2",
        },
      ],
    };

    const url = "http://localhost:3000/api/SaveReviewMovies";

    fetch(url, { method: "POST", body: JSON.stringify(movieReviewObject) })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="nba,players,produtos"></meta>
        <meta name="description" content="encontre tudo de nba aqui"></meta>
        {/* -- essa tag é o título do HTML comum */}
      </Head>

      <div>
        <h1 className={styles.title}>
          Inclua a Review Do Filme Que Você Viu Hoje
        </h1>

        <form>
          <label type="text">
            Nome do Filme
            <input
              value={movieName}
              onChange={(event) => setMovieName(event.target.value)}
            ></input>
          </label>
          <label type="text">
            Nome do Original do Filme
            <input
              value={originalMovieName}
              onChange={(event) => setOriginalMovieName(event.target.value)}
            ></input>
          </label>
          <label type="text">
            Data Que Assisti
            <input
              value={viewDate}
              onChange={(event) => setViewDate(event.target.value)}
            ></input>
          </label>
          <label type="text">
            Avaliação do Filme
            <input
              value={movieRating}
              onChange={(event) => setMovieRating(event.target.value)}
            ></input>
          </label>

          <label type="text">
            Comentários do Filme
            <input
              value={movieComments}
              onChange={(event) => setComments(event.target.value)}
            ></input>
          </label>
          <label type="text">
            Diretor
            <input
              value={director}
              onChange={(event) => setDirector(event.target.value)}
            ></input>
          </label>
          <label type="text">
            Onde Assisti
            <input
              value={localOfView}
              onChange={(event) => setLocalOfView(event.target.value)}
            ></input>
          </label>
          <button type="submit" onClick={(event) => submitMovieReview(event)}>
            Botão
          </button>
        </form>
      </div>
    </>
  );
}
