import { createSlice } from "@reduxjs/toolkit";

const loadUsersFromLocalStorage = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

const userSlice = createSlice({
  name: "users",
  initialState: loadUsersFromLocalStorage(),
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
    deleteUser: (state, action) => {
      const updatedState = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(updatedState));
      return updatedState;
    },
    updateUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
