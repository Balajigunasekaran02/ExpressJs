const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("<h2>Welcome to men and women dummy data</h2>");
    res.end();
  } else if (req.url == "/men") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/products?limit=10",
      method: "GET",
    };
    const apireq = http.request(options, (api_res) => {
      api_res.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");

        res.write(data.toString());
        res.end();
      });
    });
    apireq.on("error", () => {
      console.log(e);
    });
    apireq.end();
  } else if (req.url == "/women") {
    const options = {
      hostname: "fakestoreapi.com",
      path: "/users?limit=10",
      method: "GET",
    };
    const apireq = http.request(options, (api_res) => {
      api_res.on("data", (data) => {
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.write(data.toString());
        res.end();
      });
    });
    apireq.on("error", () => {
      console.log(e);
    });
    apireq.end();
  } else {
    res.write("Page not found");
    res.end();
  }
});
const HOSTNAME = "localhost";
const PORT = 8081;

server.listen(PORT, () => {
  console.log(`Server Running on the ${HOSTNAME}:${PORT}`);
});
