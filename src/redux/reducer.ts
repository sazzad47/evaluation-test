import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types";

const initialState: Todo[] = [];

const Reducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<Todo>) => {
      return [...state, action.payload];
    },
   
  },
});

export const {
  addTodos,
} = Reducer.actions;
export const reducer = Reducer.reducer;

export default Reducer.reducer;
