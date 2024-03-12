import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      message,
    };
    //"mongodb+srv://alirezaAskari:wBRTCRjKYOBDU4UM@cluster0.in11mmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    let client;
    const conection = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_projectname}.in11mmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
      client = await MongoClient.connect(conection);
    } catch (error) {
      res.status(500).json({ message: "could not connect to the database" });
      return;
    }

    const db = client.db(process.env.mongodb_database);

    try {
      const result = await db.collection("messages").insertOne(newComment);
      newComment._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "failed to store message." });
    }

    console.log(newComment);
    res.status(200).json({ message: "success", data: newComment });
  }
}
export default handler;
