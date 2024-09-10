import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTodo() {},
    removeTodo() {},
    deleteAllTodo() {},
  },
});

export const { addTodo, removeTodo, deleteAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
