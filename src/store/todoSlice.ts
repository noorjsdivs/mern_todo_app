import { createSlice } from '@reduxjs/toolkit'

const initialState = {
      todo: [],
}

export const todoSlice = createSlice({
      name: 'todo',
      initialState,
      reducers: {
            addTodo: (state, action) => {
                  //@ts-ignore
                  state.todo.push(action.payload)
            },
            deleteTodo: (state, action) => {
                  //@ts-ignore
                  state.todo = state.todo.filter((item) => item.id !== action.payload)
            },

            resetTodo: (state) => {
                  state.todo = []
            }

      },
})

export const { addTodo, deleteTodo, resetTodo } = todoSlice.actions
export default todoSlice.reducer