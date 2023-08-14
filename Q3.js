const express = require("express");
const app = express();
const HOSTNAME = "localhost";
const PORT = 8081;

//Q.3_Create a Basic Server with Different Routes using Express
app.get("/", (req, res) => {
  res.json({ msg: "This is Homepage" });
  req.on("error", (e) => {
    res.send("Page not found");
  });
});

app.get("/about", (req, res) => {
  res.json({ msg: "This is About Page" });
});

app.get("/contact", (req, res) => {
  res.json({ msg: "This is Contact Page" });
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server Running on the ${HOSTNAME}:${PORT}`);
});
