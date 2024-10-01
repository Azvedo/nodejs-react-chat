import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signup", async (req, res) => {
  const { username, secret, first_name, last_name } = req.body;
  try {
    const r = await axios.post( //esse request me retorna um objeto com o username e o secret
      "https://api.chatengine.io/users/",
      { username: username, secret: secret, first_name: first_name, last_name: last_name },
      { headers: { "Private-Key": process.env.NODEJS_CHAT_ENGINE_API_KEY } }
    )
    return res.status(r.status).json(r.data);  // retorno o status do request e os dados
  } catch (e) {
    return res.status(e.response.status).json(e.response.data); //retorno o erro
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;
  try {
    const r = await axios.get(
      "https://api.chatengine.io/users/me/",
      {
        headers: {
          "Project-ID": process.env.NODEJS_CHAT_ENGINE_PROJECT_ID,
          "User-Name": username,
          "User-Secret": secret
        }
      }
    )
    return res.status(r.status).json({ username, secret });
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});