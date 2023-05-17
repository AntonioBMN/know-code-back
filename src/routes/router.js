const verifierController = require("../api/controllers/verifierController");

module.exports = async function (server) {
  server.route("/verify_text").post(verifierController.verifyText);
};
