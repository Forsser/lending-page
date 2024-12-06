import { createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронний екшн для відправки заявки
export const sendClientRequest = createAsyncThunk(
  "clientRequest/send",
  async ({ name, email, phone }, { rejectWithValue }) => {
    try {
      // Виконання запиту до серверу
      const response = await fetch("http://localhost:5000/client-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        throw new Error("Щось пішло не так");
      }

      const data = await response.json();
      return data.message; // Успішний результат, повертаємо повідомлення
    } catch (error) {
      return rejectWithValue(error.message); // У разі помилки повертаємо повідомлення про помилку
    }
  }
);
