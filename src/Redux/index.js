// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter:counterSlice
    // your reducers go here
  },
});

export default store;
