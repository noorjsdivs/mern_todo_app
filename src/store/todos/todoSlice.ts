import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the shape of a Todo item
interface Todo {
  id: string;
  text: string;
  time: string; // Add time property
}

// Define the initial state type as an array of Todo items
type TodoState = Todo[];

// Initial state (empty array of Todo items)
const initialState: TodoState = [];

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    // Add a new todo item
    addTodo: (state, action: PayloadAction<{ text: string; time: string }>) => {
      state.push({ id: uuidv4(), ...action.payload });
    },

    // Remove a todo item by id
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },

    // Delete all todos
    deleteAllTodo: () => {
      return [];
    },
  },
});

export const { addTodo, removeTodo, deleteAllTodo } = todoSlice.actions;
export default todoSlice.reducer;
