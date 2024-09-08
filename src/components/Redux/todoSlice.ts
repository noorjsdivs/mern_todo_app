import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for each todo item
interface TodoItem {
  id: number;
  // Add other fields as needed (e.g., title, description)
}

// Define the type for the initial state
interface TodoState {
  todos: TodoItem[];  // Renamed to "todos" to represent a list of todo items
}

const initialState: TodoState = {
  todos: []  // Make sure the initial state uses the correct key
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // PayloadAction<TodoItem> defines the type for action.payload
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },

    // PayloadAction<number> ensures the payload is the id of the todo item
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    // Remove all todos
    removeTodos: (state) => {
      state.todos = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;
