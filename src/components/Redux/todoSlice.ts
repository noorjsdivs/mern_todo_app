import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the type for each todo item
interface TodoItem {
  id: number;

}

// Define the type for the initial state
interface TodoState {
  todo: TodoItem[];
}

const initialState: TodoState = {
  todo: []
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // PayloadAction<TodoItem> defines the type for action.payload
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.todo.push(action.payload)
    },

    // PayloadAction<number> ensures the payload is the id of the todo item
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload)
    },

    remove: (state) => {
      state.todo = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, remove } = counterSlice.actions

export default counterSlice.reducer