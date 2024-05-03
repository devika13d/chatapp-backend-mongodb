const path = require('path');
const express = require("express");
const { app, server } = require("./devend/socket/socket");
const router = require("./devend/Routes/router");
require("dotenv").config();
require("./devend/DB/mongoconnection");

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "/devchat/build")));

const port = 5000;

app.get("/", (res) => {
  res.send("Dev Chat Running...");
});

server.listen(port, () => {
  console.log(`Server is successfully running at: ${port}`);
});
