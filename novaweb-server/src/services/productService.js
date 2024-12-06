const mysql = require("mysql2");
require("dotenv").config();

// Підключення до бази даних MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST, // ваш хост
  user: process.env.DB_USER, // ваше ім'я користувача
  password: process.env.DB_PASSWORD, // ваш пароль
  database: process.env.DB_NAME, // ваша база даних
});

// Підключення до бази даних
db.connect((err) => {
  if (err) {
    console.error("Помилка підключення до бази даних: ", err);
    process.exit(1);
  }
  console.log("Успішно підключено до бази даних!");
});

// Функція для додавання товару в базу даних
const saveProduct = (name, description, imagePath) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO products (name, description, image) VALUES (?, ?, ?)";
    db.query(query, [name, email, phine], (err, result) => {
      if (err) {
        reject(new Error("Помилка при збереженні товару: " + err.message));
      } else {
        resolve(result.insertId); // Повертаємо ID нового запису
      }
    });
  });
};

module.exports = { saveProduct, db };
