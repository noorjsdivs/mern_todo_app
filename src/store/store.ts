import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos/todoSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type for type-safe dispatching
export type AppDispatch = typeof store.dispatch;
