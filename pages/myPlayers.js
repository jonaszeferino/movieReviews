import { useEffect, useState } from "react";
let url = "http://localhost:3000/api/GetReviewMoviesBuscaAlgoTodos";

export default function Home() {
  let [movieFact, setMovieFact] = useState([]);
  let [viewDateFact, setViewDateFact] = useState([]);
  let [directorFact, setDirectorFact] = useState([]);
  let [localOfViewFact, setLocalOfViewFact] = useState([]);
  let [viewRateFact, setViewRateFact] = useState([]);
  let [commentsFact, setCommentsFact] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => (
          setMovieFact(result.data[0].movieName),
          setViewDateFact(result.data[0].viewDate),
          setDirectorFact(result.data[0].director),
          setLocalOfViewFact(result.data[0].localOfView),
          setViewRateFact(result.data[0].viewRate),
          setCommentsFact(result.data[0].comments)
        )
      );
  });

  return (
    <div style={{ color: "blue" }}>
      <h1 style={{ color: "black" }}>{`My Movie Reviews 0`}</h1>
      <div>Nome do Filme: {movieFact}</div>
      <div>Data Que Eu vi: {viewDateFact}</div>
      <div>Onde Eu vi: {localOfViewFact}</div>
      <div>Comentário: {commentsFact}</div>
      <div>Diretor: {directorFact}</div>
      <div>Nota do Filme: {viewRateFact}</div>
    </div>
  );
}
