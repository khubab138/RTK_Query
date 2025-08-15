import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { todo } from "../../models/todo.model";

export const TodoAPI = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://688f92e2f21ab1769f899a85.mockapi.io/",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodo: builder.query<todo[], void>({
      query: () => "/CRUD_Parent",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<todo, todo>({
      query: (todo) => ({
        url: "/CRUD_Parent",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/CRUD_Parent/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    editeTodo: builder.mutation<void, { id: string; body: Partial<todo> }>({
      query: ({ id, body }) => ({
        url: `/CRUD_Parent/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditeTodoMutation,
} = TodoAPI;
