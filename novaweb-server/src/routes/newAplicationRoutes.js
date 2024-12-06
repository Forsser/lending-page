const express = require("express");
const router = express.Router();
const {
  handleClientRequest,
} = require("../controllers/newApplicationController.js");

// Маршрут для отримання заявки клієнта
router.post("/", handleClientRequest);

module.exports = router;
