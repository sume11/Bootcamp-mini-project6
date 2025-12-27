const express = require("express");
const router = express.Router();
const { greeting, receiveData } = require("../controllers/dataController");
router.get("/greeting", greeting);
router.post("/submit", receiveData);
module.exports = router;
