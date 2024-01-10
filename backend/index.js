const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import the axios module

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "be01b3e9-3eb2-48f4-a149-f7a63055be84" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);