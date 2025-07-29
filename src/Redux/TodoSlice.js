// src/Redux/TodoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    loadTodos: (state, action) => {
      // replace the whole state with saved todos array
      return action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, updateTodo, loadTodos } = todosSlice.actions;

export default todosSlice.reducer;
