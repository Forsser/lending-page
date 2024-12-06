// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./src/routes/productRoutes.js");
const clientRequest = require("./src/routes/newAplicationRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Тестовий маршрут
app.use("/client-request", clientRequest);
/* app.use("/products", productRoutes); */

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
