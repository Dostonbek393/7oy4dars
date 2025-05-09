import { configureStore } from "@reduxjs/toolkit";
import productsApi from "./api/productsApi";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(productsApi.middleware),
});

export default store;
