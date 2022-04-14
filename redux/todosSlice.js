import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosReducer: (state, action) => {
      state.todos = action.payload;
    },
    addTodosReducer: (state, action) => {
      state.todos.push(action.payload);
    },
    hideCompletedReducer: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    updateTodoReducer: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
    deleteTodoReducer: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  setTodosReducer,
  addTodosReducer,
  updateTodoReducer,
  hideCompletedReducer,
  deleteTodoReducer,
} = todosSlice.actions;

export default todosSlice.reducer;
