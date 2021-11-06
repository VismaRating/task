const express = require("express");
const cors = require("cors");
const configure = require("./config");
// 
const data = require("../database/payload.json");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/home", (req, res) => {
  res.send(data);
});
app.listen(configure.port, console.log("server runing port 6400"));
