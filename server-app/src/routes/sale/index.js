const express = require("express");
const { index, add, addMultiple } = require("../../controllers/sale");
const router = express.Router();

router.get("/", index);
router.post("/add", add);
router.post("/addAll", addMultiple);

module.exports = router;
