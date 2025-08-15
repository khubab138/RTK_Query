import { configureStore } from "@reduxjs/toolkit";
import { TodoAPI } from "../Slices/TodoSlice";
import { CompleteTodos } from "../Slices/CompleteTodos";

export const store = configureStore({
  reducer: {
    [TodoAPI.reducerPath]: TodoAPI.reducer,
    [CompleteTodos.reducerPath]: CompleteTodos.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(TodoAPI.middleware)
      .concat(CompleteTodos.middleware),
});
