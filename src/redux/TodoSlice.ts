import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";
// import { Todo } from './../../.next/type';

interface todoState {
    todoList: Todo[]
}

const initialState: todoState = {
    todoList: [],


}

export const todoSlice = createSlice({
    // name
    name: "todo",
    // initialeState
    initialState,
    // reducers
    reducers: {
        // add todo 
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todoList.push(action.payload)
        },
        // delete todo
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todoList = state.todoList?.filter(item => item._id !== action.payload)
        },

        // remove todo
        removeTodo: (state) => {
            state.todoList = []
        }
    }
})

export const { addTodo, deleteTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;