import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./slices/signUpSlice";
export const store = configureStore({
  reducer: {
    signUpSlice,
  },
  devTools: true,
});
