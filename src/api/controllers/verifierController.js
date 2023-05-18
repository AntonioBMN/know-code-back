const { saveFile } = require("../../services/fileServices");
exports.verifyText = async function (req, res) {
  const words = req.query.words.split(",");
  const files = Object.values(req.files);
  const count = [];

  words.forEach((element, index) => {
    saveFile(files[index]);
    const data = files[index].data.toString("utf8");
    const rejex = new RegExp(`\\b${element}` + "\\b", "gi");
    count.push([element, (data.match(rejex) || []).length]);
  });

  res.send({
    code: 200,
    message: count,
  });
};
