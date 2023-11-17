import { configureStore } from "@reduxjs/toolkit";
import { reducerSlice } from "../reducer/reducer";

export const store = configureStore({
  reducer: {
    todo: reducerSlice.reducer,
  },
});
