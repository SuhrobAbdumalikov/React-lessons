import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  console.log(res.data);
  return res.data;
});
export const getTodosById = createAsyncThunk(
  "currentTodos/getTodosById",
  async (id) => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + id
    );
    console.log(res.data);
    return res.data;
  }
);

export const reducerSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    currentTodo: {},
    isloading: false,
    isRejected: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isloading = true;
      state.isRejected = false;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isloading = false;
      state.todos = action.payload;
      state.isRejected = false;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isloading = false;
      state.isRejected = true;
    });
    builder.addCase(getTodosById.fulfilled, (state, action) => {
      state.isloading = false;
      state.currentTodo = action.payload;
      state.isRejected = false;
    });
  },
});

export const { addTodo } = reducerSlice.actions;
