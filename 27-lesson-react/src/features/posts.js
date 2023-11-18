import { basiApi } from "../store/apiSlice";

const postsApi = basiApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
    }),
    getPostsById: builder.query({
      query: (id) => "posts/" + id,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostsByIdQuery } = postsApi;
