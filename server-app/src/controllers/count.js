const models = require("../models").default;
const index = async (req, res) => {
  try {
    const saleCount = await models.Sale.count();
    const purchaseCount = await models.Purchase.count();
    const expenseCount = await models.Expense.count();
    const productCount = await models.Product.count();
    const countList = {
      product: productCount,
      purchase: purchaseCount,
      sale: saleCount,
      expense: expenseCount,
    };

    res.status(200).json(countList);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
module.exports = {
  index,
};
