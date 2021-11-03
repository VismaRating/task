const express = require("express");
const configure = require("./config");
const data =require("../database/payload.json")


const app = express();

app.get("/home", (req, res) => {
  res.send(data);
});
app.listen(configure.port, console.log("server runing port 6400"));