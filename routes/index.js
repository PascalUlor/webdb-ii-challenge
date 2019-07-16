const express = require("express");
const Controllers = require("../controllers");

const router = express.Router();

router.get("/", Controllers.getCars);

module.exports = router;
