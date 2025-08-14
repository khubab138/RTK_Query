import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface DATA {
    todo: string;
    id: string;
    isDone: boolean;
    isEdit: boolean;
}
const initialState: DATA[] = [];
export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
                todo: action.payload,
                id: uuidv4(),
                isDone: false,
                isEdit: false,
            });
        },
        deleteTodo: (state, action: PayloadAction<string>) =>
            state.filter((todo) => todo.id !== action.payload),
        editTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isEdit = !todo.isEdit;
            }
        },
        doneTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
    },
});

export const { addTodo, deleteTodo, editTodo, doneTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
