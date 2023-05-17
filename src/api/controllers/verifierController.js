const saveFile = require("../../services/ saveFile");

exports.verifyText = async function (req, res) {
  const { word } = req.query;
  const { file } = req.files;
  saveFile(file);
  res.send({
    code: true,
    message: "Arquivo salvo",
  });
};
