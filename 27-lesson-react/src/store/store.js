import { configureStore } from "@reduxjs/toolkit";
import { basiApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [basiApi.reducerPath]: basiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(basiApi.middleware),
});
