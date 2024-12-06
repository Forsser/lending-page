const db = require("../../db.js"); // Підключення до бази даних

// Контролер для додавання товару
const addProduct = (req, res) => {
  const { name, description } = req.body; // Отримуємо ім'я і опис товару з тіла запиту
  const image = req.file ? req.file.path : null; // Отримуємо шлях до завантаженого зображення

  // Перевірка, чи є зображення
  if (!name || !description || !image) {
    return res.status(400).json({
      error: "Необхідно вказати ім'я, опис та завантажити зображення.",
    });
  }

  // Запит до бази даних для збереження товару
  const query =
    "INSERT INTO products (name, description, image) VALUES (?, ?, ?)";
  db.query(query, [name, description, image], (err, result) => {
    if (err) {
      console.error("Помилка при додаванні товару:", err);
      return res.status(500).json({ error: "Помилка сервера" });
    }

    res
      .status(201)
      .json({ message: "Товар успішно додано!", productId: result.insertId });
  });
};

module.exports = { addProduct };
