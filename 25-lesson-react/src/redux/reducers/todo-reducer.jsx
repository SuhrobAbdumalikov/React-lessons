import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload.id
          ? todo.title === action.payload.title
          : null
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
