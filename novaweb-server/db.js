const mysql = require("mysql2");
require("dotenv").config();

// Налаштування підключення до MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Хост бази даних (наприклад, localhost або IP)
  user: process.env.DB_USER, // Користувач бази даних
  password: process.env.DB_PASSWORD, // Пароль
  database: process.env.DB_NAME, // Назва бази даних
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise(); // Підключення з використанням Promises

module.exports = promisePool;
