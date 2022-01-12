const express = require("express");
const { index, add, addMultiple } = require("../../controllers/product");
const router = express.Router();

router.get("/", index);

router.post("/add", add);
router.post("/upload", addMultiple);
module.exports = router;
