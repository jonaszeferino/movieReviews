import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("cinemaReviews").collection("movieViews");

  switch (req.method) {
    case "GET":
      const body = res.body;
      const getMongo = collection.findOne(body);
      console.log(getMongo);
      console.log(body);
      res.json({
        status: 200,
        data: getMongo,
      });
      break;

    default:
      break;
  }
}
