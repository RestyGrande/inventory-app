const models = require("../models").default;
const mockData = require("../database/mockData/mockPurchase.json");
const index = async (req, res) => {
  try {
    const Product = models.Product;
    const data = await models.Purchase.findAll({
      include: Product,
      order: [["date", "DESC"]],
    });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  try {
    await models.Purchase.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const addMultiple = async (req, res) => {
  try {
    await models.Purchase.bulkCreate(mockData);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  index,
  add,
  addMultiple,
};
