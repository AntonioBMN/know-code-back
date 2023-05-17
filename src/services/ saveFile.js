const saveFile = (file) => {
  file.mv(`./uploads/${file.name}`, (err) => {
    if (err) throw err;
  });
};

module.exports = saveFile;
