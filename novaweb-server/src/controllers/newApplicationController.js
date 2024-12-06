const clientService = require("../services/clientService.js");

const handleClientRequest = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Валідація даних
    const validationError = clientService.validateClientData(
      name,
      email,
      phone
    );
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // Надсилання повідомлення на електронну пошту
    await clientService.sendEmailNotification(name, email, phone);

    return res.status(200).json({ message: "Заявка успішно відправлена!" });
  } catch (error) {
    console.error("Error handling client request:", error);
    return res.status(500).json({ error: "Сталася помилка на сервері" });
  }
};

module.exports = { handleClientRequest };
