import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleToDo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editToDo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addToDo, toggleToDo, deleteToDo, editToDo } = todoSlice.actions;
export default todoSlice.reducer;
