const models = require("../models").default;
const mockData = require("../database/mockData/mockProduct.json");

const index = async (req, res) => {
  try {
    const data = await models.Product.findAll({ order: [["name", "ASC"]] });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  try {
    await models.Product.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const addMultiple = async (req, res) => {
  try {
    await models.Product.bulkCreate(mockData);
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
