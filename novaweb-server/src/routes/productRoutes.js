const express = require("express");
const { upload, addProduct } = require("../services/upload"); // Підключення вашого файлу
const router = express.Router();

router.post("/", upload.single("file"), addProduct);

module.exports = router;
