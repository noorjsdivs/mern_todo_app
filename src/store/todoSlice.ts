import { Todo } from "@/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface TodoState {
      todoList: Todo[]
}


const initialState: TodoState = {
      todoList: [],
}


export const todoSlice = createSlice({
      
      name: "todo",
      
      initialState,
      // reducer
      reducers: {

            addTodo: (state, action: PayloadAction<Todo>) => {
                  state.todoList.push(action.payload)
            },

            deleteTodo: (state, action) => {
                  state.todoList = state.todoList.filter((item) => item._id !== action.payload)
            },

            allReset: (state) => {
                  state.todoList = []
            }

      },

});

export const { addTodo, deleteTodo, allReset } = todoSlice.actions;
export default todoSlice.reducer;