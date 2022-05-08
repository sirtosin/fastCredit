import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  todo: "",
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.todo = payload;
      localStorage.setItem("todo", JSON.stringify(payload));
      state.todos = JSON.parse(localStorage.getItem("todos")) || [];
      state.todos.push(payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { add} =
  todoSlice.actions;
export default todoSlice.reducer;
