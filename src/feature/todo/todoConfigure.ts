import { createSlice } from '@reduxjs/toolkit';
import { TodoStateType, TodoType } from '../../../type';

const todoConfigure = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  },
  reducers: {
    add: (state: TodoStateType, actions) => {
      const value = actions.payload;
      if (value) {
        state.todoList.push({...value, compleated: false});
      }
    },
    remove: (state, actions) => {
      
      if (actions.payload.index === 'all') {
        return {todoList: []};
      }
      const newArr = state.todoList.filter(
        (value: string, index: number) => index !== actions?.payload?.index
      );

      return {todoList: newArr};
    },

    compleateTodo: (state : TodoStateType, actions) => {
      let existingTodo: TodoType = state.todoList.find(((item: TodoType) => item?.title === actions?.payload?.title))! ;
      const currentData = new Date().toLocaleString("en-US", {timeZone: "Asia/Dhaka"});
      // {...existingTodo, compleated: true, date: currentData}
      existingTodo!.compleated! = true;
      existingTodo.date = currentData;
    },
  },
});

export default todoConfigure.reducer;
export const { add, remove, compleateTodo } = todoConfigure.actions;
