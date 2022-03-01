var sum = require("./sum.js");

console.log(sum(4, 3));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   try {
//     res.writeHead(200, { contentType: "application/json" });
//     res.end(JSON.stringify({ data: "Hello World!!" }));
//   } catch (err) {
//     res.writeHead(400, { contentType: "application/json" });
//     res.end(JSON.stringify({ data: "Error!!" }));
//   }
// });

// server.listen(3001, () => {
//   console.log("Listening to port 3001...");
// });
