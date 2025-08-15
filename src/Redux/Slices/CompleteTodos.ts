import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { todo } from "../../models/todo.model";

export const CompleteTodos = createApi({
  reducerPath: "complete",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://688f92e2f21ab1769f899a85.mockapi.io/",
  }),
  tagTypes: ["Comp"],
  endpoints: (builder) => ({
    completeTodos: builder.query<todo[], void>({
      query: () => "/CRUD_Complete",
      providesTags: ["Comp"],
    }),
    deleteCompleteTodos: builder.mutation<void, string>({
      query: (id) => ({
        url: `/CRUD_Complete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comp"],
    }),
    addCompleteTodos: builder.mutation<todo, todo>({
      query: (todo) => ({
        url: `/CRUD_Complete`,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Comp"],
    }),
  }),
});

export const {
  useCompleteTodosQuery,
  useDeleteCompleteTodosMutation,
  useAddCompleteTodosMutation,
} = CompleteTodos;
