const models = require("../models").default;

const index = async (req, res) => {
  try {
    const data = await models.Expense.findAll();
    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const add = async (req, res) => {
  try {
    await models.Expense.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
module.exports = {
  index,
  add,
};
