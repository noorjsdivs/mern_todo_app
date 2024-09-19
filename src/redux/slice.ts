import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo:[],
}

export const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        state.todo.push(action.payload)
    },
    deleteTodo:(state,action)=>{
        state.todo = state.todo.filter((item:any)=>item?.id !== action?.payload?.id)
    },
    resetToDo:(state)=>{
         state.todo = []
    }
  },
})

// Action creators are generated for each case reducer function
export const {addTodo,deleteTodo,resetToDo } = todo.actions

export default todo.reducer