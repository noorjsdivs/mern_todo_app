import { createSlice } from '@reduxjs/toolkit'
// user list ta static vabe neya hoiche data.tsx file theke
import { userList } from '../components/Data'



export const userSlice = createSlice({
  name: 'users',
  initialState:userList,
  reducers: {
        addUser:(state,action)=>{
           state.push(action.payload)
            
        } ,
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            const userId = state.find(user => user.id == id)
            if(userId){
                 return state.filter(user => user.id !==id)
            }
        }       
  },
})

// Action creators are generated for each case reducer function
export const { addUser,deleteUser} = userSlice.actions

export default userSlice.reducer