import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("cinemaReviews").collection("movieViews");

  switch (req.method) {
    case "GET":
      const body = res.body;
      const getMongo = collection.findOne(body | null);
        res.json({
        status: 200,
        data: getMongo,
      });
      break;

    default:
      break;
  }
}

//update gitTeste
