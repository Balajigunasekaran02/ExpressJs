const express = require("express");
const app = express();
const HOSTNAME = "localhost";
const PORT = 8081;

//Q.4 Build a Server that Generate! Random Number Using Express

app.get("/", (req, res) => {
  res.send("RANDOM NUMBER GENERATOR- CHNAGE THE PATH TO /random");
});
app.get("/random", (req, res) => {
  const max = 6;
  const random = Math.floor(Math.random() * max);
  res.json({ Random: random });
});
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server Running on the ${HOSTNAME}:${PORT}`);
});
