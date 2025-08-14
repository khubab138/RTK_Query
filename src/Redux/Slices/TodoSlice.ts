import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { todo } from "../../models/todo.model";

export const TodoAPI = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://688f92e2f21ab1769f899a85.mockapi.io",
  }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodo: builder.query<todo[], void>({
      query: () => "/TSC_Crud",
      providesTags: ["Todos"],
    }),
    addTodo: builder.mutation<todo, todo>({
      query: (todo) => ({
        url: "/TSC_Crud",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/TSC_Crud/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    editeTodo: builder.mutation<void, { id: string; body: Partial<todo> }>({
      query: ({ id, body }) => ({
        url: `/TSC_Crud/${id}`,
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
