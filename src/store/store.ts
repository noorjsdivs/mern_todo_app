import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/todoSlice";

// Configure the Redux store

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});


