const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
})

console.log("Hello Bapak");
console.log("Hello Guys");

app.listen(3000, () => console.log("Server run on port 3000"));


