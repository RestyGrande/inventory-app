const models = require("../models").default;

async function index(req, res) {
  try {
    const currentInventory = await models.Product.inventory();
    res.status(200).send(currentInventory);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { index };
