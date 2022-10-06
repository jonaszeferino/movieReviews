import styles from "../styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  let [tvshowName, setTvshowName] = useState();
  let [originalTvshowName, setOriginalTvshowName] = useState();
  let [viewDate, setViewDate] = useState();
  let [viewRate, setViewRate] = useState();
  let [season, setSeason] = useState();
  let [episodeName, setEpisodeName] = useState();
  let [director, setDirector] = useState();
  let [comments, setComments] = useState();
  let [localOfView, setLocalOfView] = useState();

  function submitTvshowReview(event) {
    event.preventDefault(); //previne que o evento de submit do browser causado pelo click no botão, de um refresh na tela
    const tvshowReviewObject = {
      viewer: "Jonas Zeferino",
      tvshowName: tvshowName,
      originalTvshowName: originalTvshowName,
      viewDate: viewDate,
      viewRate: viewRate,
      season: season,
      episodeName: episodeName,
      director: director,
      comments: comments,
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

    const url = "http://localhost:3000/api/SaveReviewTvshows";

    fetch(url, { method: "POST", body: JSON.stringify(tvshowReviewObject) })
      .then((response) => response.json())
      .then((result) => console.log(result));
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="movies,tvshows,reviews"></meta>
        <meta name="description" content="movies and tvshows reviews"></meta>
        {/* -- essa tag é o título do HTML comum */}
      </Head>

      <div>
        <h1 className={styles.title}>
          Inclua a Review Da Série Que Você Viu Hoje
        </h1>

        <form>
          <label type="text">
            Nome da Série
            <input
              value={tvshowName}
              onChange={(event) => setTvshowName(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Nome do Original da Série
            <input
              value={originalTvshowName}
              onChange={(event) => setOriginalTvshowName(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Data Que Assisti
            <input
              value={viewDate}
              onChange={(event) => setViewDate(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Avaliação da Série
            <input
              value={viewRate}
              onChange={(event) => setViewRate(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Temporada
            <input
              value={season}
              onChange={(event) => setSeason(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Episódio
            <input
              value={episodeName}
              onChange={(event) => setEpisodeName(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Diretor
            <input
              value={director}
              onChange={(event) => setDirector(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Comentários
            <input
              value={comments}
              onChange={(event) => setComments(event.target.value)}
            ></input>
          </label>
          <br/>
          <label type="text">
            Onde Eu vi
            <input
              value={localOfView}
              onChange={(event) => setLocalOfView(event.target.value)}
            ></input>
          </label>
          <br/>
          <button type="submit" onClick={(event) => submitTvshowReview(event)}>
            Enviar Avaliação
          </button>
        </form>
      </div>
    </>
  );
}
