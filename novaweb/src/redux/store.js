import { configureStore } from "@reduxjs/toolkit";
import clientRequestReducer from "./reducers";

const store = configureStore({
  reducer: {
    clientRequest: clientRequestReducer, // додаємо редюсер для заявки клієнта
  },
});

export default store;
