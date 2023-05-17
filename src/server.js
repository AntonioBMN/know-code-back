const express = require("express");
const server = express();
const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
