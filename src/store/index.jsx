import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/auth";

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
