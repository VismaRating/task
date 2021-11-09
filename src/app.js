
const express = require('express');
const http = require('http');
const cors = require('cors');
//setup app & its route
const routes = require('./routes/index.route');
const app = express();
const port = 8080;
const serviceName = "simple_web_service";

app.use(cors());
app.use(routes);

//start http server running locally
const httpServer = http.createServer(app);
httpServer.listen(port);
console.log(`[${serviceName}] http server listening at port ${port}`);

module.exports = { app };