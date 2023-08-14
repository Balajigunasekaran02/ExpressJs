const express = require("express");
const app = express();
const HOSTNAME = "localhost";
const PORT = 8081;

const counter = 0;
//Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
app.get("/", (req, res) => {
  res.json({ Random: counter });
});
//increment
app.get("/increment", (req, res) => {
  counter++;
  res.json({ Counter: counter });
});
//decrement
app.get("/decrement", (req, res) => {
  counter--;
  res.json({ Counter: counter });
});
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server Running on the ${HOSTNAME}:${PORT}`);
});
