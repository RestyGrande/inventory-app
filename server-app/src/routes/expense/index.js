const express = require("express");
const { index, add } = require("../../controllers/expense");

const router = express.Router();

router.get("/", index);

router.post("/add", add);

module.exports = router;
