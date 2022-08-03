import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoType} from "../../types";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [] as TodoType[],
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TodoType>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        changeCompleted: (state, action: PayloadAction<{ id: number, completed: boolean }>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        },
        editTodo: (state, action: PayloadAction<{ id: number, description: string }>) => {
            const todo = state.todos.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.description = action.payload.description;
            }
        },

    },
})

export const {addTodo, removeTodo, changeCompleted, editTodo} = todoSlice.actions;
export default todoSlice.reducer;