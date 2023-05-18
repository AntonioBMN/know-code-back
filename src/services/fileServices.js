const fs = require("fs");

const saveFile = async (file) => {
  if (!fs.existsSync("./uploads/")) {
    fs.mkdirSync("./uploads/");
  }
  file.mv(`./uploads/${file.name}`, (err) => {
    if (err) throw err;
  });
};

module.exports = { saveFile };
