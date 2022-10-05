import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("cinemaReviews").collection("movieViews");

  switch (req.method) {
    case "GET":
      const body = res.body;
      const location = {
        localOfView: "Netflix"

      }
      const getMongo = await collection.findOne(location);
      // nesse caso vai busca o primeiro registro que tenha na prop "localOfView: "Netflix"
      // se colocar apenas fin ele só vai verificar se existe e da um ok
        res.json({
        status: 200,
        data: getMongo,
        get: "Get Feito Com Sucesso!"
      });
      break;     

    default:
      break;
  }
}

//update gitTeste
