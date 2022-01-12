const express = require("express");
const router = express.Router();

const { index } = require("../../controllers/incomeStatement");

router.get("/:startDate/:endDate", index);

module.exports = router;
