const express = require("express");
const router = express.Router();
const { index } = require("../../controllers/inventory");

router.get("/", index);

module.exports = router;
