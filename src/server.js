const express = require("express");
const fileupload = require("express-fileupload");
const server = express();
const port = 3000;

server.use(fileupload());
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = server;
