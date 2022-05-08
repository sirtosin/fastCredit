import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: "",
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, { payload }) => {
      state.user = payload;
          localStorage.setItem("user", JSON.stringify(payload));
          state.users = JSON.parse(localStorage.getItem("profile")) || [];

          state.users.push(payload);
          localStorage.setItem("profile", JSON.stringify(state.users));
   
    },

    loginUser: (state, { payload }) => {
      state.user = payload;
       localStorage.setItem("user", JSON.stringify(payload));
    },

    resetUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, resetUser, loginUser } = userSlice.actions;
export default userSlice.reducer;
