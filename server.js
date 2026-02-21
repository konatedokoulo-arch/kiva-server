const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("Serveur KIVA en ligne !");
});

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port " + PORT);
});
