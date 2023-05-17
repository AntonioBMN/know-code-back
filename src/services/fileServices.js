const saveFile = async (file) => {
  console.log(file);
  file.mv(`./uploads/${file.name}`, (err) => {
    if (err) throw err;
  });
};

module.exports = { saveFile };
