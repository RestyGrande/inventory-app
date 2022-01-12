const models = require("../models").default;

const index = async (req, res) => {
  try {
    const Product = models.Product;
    const data = await models.Sale.findAll({
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
    await models.Sale.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const addMultiple = async (req, res) => {
  try {
    await models.Sale.bulkCreate(req.body);
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
