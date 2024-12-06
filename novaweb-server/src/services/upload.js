const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Додаємо імпорт fs
const { saveProduct } = require("../services/productService");

// Налаштування для зберігання файлів
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../uploads/"); // Визначаємо шлях до папки
    // Перевіряємо, чи існує папка, якщо ні — створюємо
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath); // Вказуємо шлях до зберігання файлів
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Генеруємо унікальне ім'я файлу
  },
});

// Фільтрація типів файлів
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Дозволяємо файл
  } else {
    cb(new Error("Тільки зображення (JPEG, PNG, JPG) дозволені!"), false);
  }
};

// Налаштування Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Максимальний розмір файлу 5 MB
});

const addProduct = async (req, res) => {
  try {
    // Дані з форми
    const { name, description } = req.body;

    // Перевірка наявності файлу
    if (!req.file) {
      return res.status(400).json({ error: "Зображення є обов'язковим!" });
    }

    // Шлях до зображення
    const imagePath = `uploads/${req.file.filename}`;

    // Збереження даних у базу даних
    const productId = await saveProduct(name, description, imagePath);

    res.status(201).json({ message: "Продукт успішно додано!", productId });
  } catch (error) {
    console.error("Помилка при додаванні продукту:", error.message);
    res.status(500).json({ error: "Внутрішня помилка сервера" });
  }
};

module.exports = { upload, addProduct };
