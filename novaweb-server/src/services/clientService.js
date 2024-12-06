const nodemailer = require("nodemailer");

// Валідація даних клієнта
const validateClientData = (name, email, phone) => {
  if (!name || !email || !phone) {
    return "Усі поля повинні бути заповнені";
  }

  // Перевірка на коректність email
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return "Невірний формат пошти";
  }

  // Перевірка на коректність номера телефону (для прикладу, перевірка на 10 цифр)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return "Невірний номер телефону";
  }

  return null; // Дані валідні
};

// Відправка повідомлення на електронну пошту
const sendEmailNotification = async (name, email, phone) => {
  // Налаштування транспорту для відправки пошти
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Використовуйте App Password
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // Ваша електронна адреса
    to: process.env.GMAIL_USER, // Отримувач (ваша адреса для отримання заявок)
    subject: "Нова заявка!",
    text: `Нова заявка!\nІм'я: ${name}\nПошта: ${email}\nТелефон: ${phone}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { validateClientData, sendEmailNotification };
