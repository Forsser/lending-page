import { createSlice } from "@reduxjs/toolkit";
import { sendClientRequest } from "./actions"; // імпортуємо асинхронний екшн

const clientRequestSlice = createSlice({
  name: "clientRequest",
  initialState: {
    loading: false,
    error: null,
    successMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendClientRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendClientRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(sendClientRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default clientRequestSlice.reducer;
