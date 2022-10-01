import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
// import { useRouter } from "next/router";

let url = "http://localhost:3000/api/GetReviewTvshows";

export default function Home() {
  let [dogfact, setdogfact] = useState();
  let [dogCount, setDogCount] = useState(-1);

  useEffect(() =>{
      console.log('mais uma imagem chamada')
      setDogCount( dogCount+=1)       
  }, [dogfact])

  const apiCall = () => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setdogfact(result.message));
  };


  return (
    <div style={{ color: "blue", display: "flex", flexDirection: "column" }}>
      <div className={styles.title}></div>

      <button onClick={apiCall}>Botão!</button>

      <Image
        src={dogfact}
        alt="dog"
        layout="fixed"
        width="600px"
        height="500px"
      />
       <div style={{fontSize: "50px",textAlign: "center",marginTop: "10px"}}>{dogCount}</div>
    </div>
  );
}