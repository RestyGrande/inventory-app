const express = require("express");
const router = express.Router();

const saleRoute = require("./sale");
const expenseRoute = require("./expense");
const purchaseRoute = require("./purchase");
const productRoute = require("./product");
const inventoryRoute = require("./inventory");
const incomeStatementRoute = require("./incomeStatement");
const countRoute = require("./count");

router.use("/sale", saleRoute);
router.use("/expense", expenseRoute);
router.use("/product", productRoute);
router.use("/purchase", purchaseRoute);
router.use("/inventory", inventoryRoute);
router.use("/incomeStatement", incomeStatementRoute);
router.use("/count", countRoute);

module.exports = router;
