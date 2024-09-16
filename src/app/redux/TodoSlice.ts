import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}
interface Favorite {
  _id: string;
  text: string;

}

const initialState = {
  todo: [] as Todo[],
  favorite: [] as Favorite[],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({ ...action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo?.filter(
        (item: any) => item?._id !== action.payload
      );
    },
    resetTodo: (state) => {
      state.todo = [];
    },
    addToFavorite: (state, action) => {
      state.favorite.push({ ...action.payload });
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
        state.favorite = state.favorite?.filter(
          (item: any) => item?._id !== action.payload
        );
      },
    resetFavorite: (state) => {
        state.favorite = [];
      },
  },
});

export const { addTodo, deleteTodo, resetTodo , addToFavorite, resetFavorite, deleteFavorite} = TodoSlice.actions;
export default TodoSlice.reducer;
