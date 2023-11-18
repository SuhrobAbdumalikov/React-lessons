import { basiApi } from "../store/apiSlice";

const todoApi = basiApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos",
    }),
    getTodosById: builder.query({
      query: (id) => "todos/" + id,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodosByIdQuery } = todoApi;
