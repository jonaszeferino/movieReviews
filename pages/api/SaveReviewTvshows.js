import client from "../../mongoConnection";
export default async function handler(req, res) {
  const collection = client.db("cinemaReviews").collection("tvshowViews");

  switch (req.method) {
    case "POST":
      const body = req.body;
      // const exists = await collection.findOne()// buscar no mongo
      // if (exists === true){
      //   res.json
      // }
      const inPutMongo = await collection.insertOne(body); // iserir azar
      res.json({
        status: 200,
        data: inPutMongo,
      });
      break;

    default:
      break;
  }
}
