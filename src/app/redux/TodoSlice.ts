import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Todo{
    _id:string,
    text:string,
    completed:boolean;
}

const initialState = {
    todo:[] as Todo[],

    
}

const TodoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            state.todo.push({...action.payload})
        },
        deleteTodo: (state, action:PayloadAction<string>) => {
           state.todo = state.todo?.filter((item:any) => item?._id !== action.payload)
        },
        resetTodo: (state) =>{
            state.todo = []
        }
    }
})

export const {addTodo, deleteTodo, resetTodo} = TodoSlice.actions;
export default TodoSlice.reducer;