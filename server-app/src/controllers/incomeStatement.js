const models = require("../models").default;

async function index(req, res) {
  try {
    const data = await models.Sale.getAllSaleByDate(
      req.params.startDate,
      req.params.endDate
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { index };
